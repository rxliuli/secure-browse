import { isMatch } from 'picomatch'
import { Management, Tabs } from 'wxt/browser'

const config = {
  whiteExtList: [
    {
      name: 'uBlock Origin',
      id: 'cjpalhdlnbpafiamejdnhcphjbkeiagm',
    },
  ],
  financialSites: [
    '*://*.binance.com/*',
    '*://*.coinbase.com/*',
    '*://*.kraken.com/*',
  ],
}

const whiteList = config.whiteExtList.map((it) => it.id)

const financialSites = config.financialSites

let extensionsList: Management.ExtensionInfo[] = []
async function updateExtensionsList() {
  extensionsList = await browser.management.getAll()
}

let disabledExtensions: string[] = []

async function persistData() {
  await browser.storage.local.set({
    disabledExtensions,
  })
}

// Utility function to match URL with patterns
function matchesPattern(url: string, patterns: string[]) {
  return isMatch(url, patterns)
}

// Function to disable extensions not in the whitelist
async function disableExtensions() {
  const disableList = extensionsList.filter(
    (it) =>
      !whiteList.includes(it.id) && it.enabled && it.id !== browser.runtime.id,
  )
  if (disableList.length === 0) {
    return
  }
  disabledExtensions = disableList.map((it) => it.id)
  await Promise.all(
    disableList.map(async (it) => {
      await browser.management.setEnabled(it.id, false)
      console.log(`Disabled extension: ${it.name}`)
    }),
  )
  await persistData()
}

// Function to re-enable previously disabled extensions
async function enableExtensions() {
  await Promise.all(
    disabledExtensions.map(async (it) => {
      await browser.management.setEnabled(it, true)
      console.log(`Re-enabled extension: ${it}`)
    }),
  )
  disabledExtensions = []
  await persistData()
}

export default defineBackground(() => {
  async function handleTab(tab: Tabs.Tab) {
    if (tab.url) {
      if (matchesPattern(tab.url, financialSites)) {
        await disableExtensions()
      } else {
        await enableExtensions()
      }
    }
  }

  // Listen for tab updates
  browser.tabs.onUpdated.addListener(async (_tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' || changeInfo.status === 'complete') {
      await handleTab(tab)
    }
  })

  // Listen for tab switches
  browser.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await browser.tabs.get(activeInfo.tabId)
    await handleTab(tab)
  })

  // Restore extensions when the extension is reloaded or the browser starts
  browser.runtime.onStartup.addListener(async () => {
    disabledExtensions = ((
      await browser.storage.local.get('disabledExtensions')
    ).disabledExtensions ?? []) as string[]
    await enableExtensions()
  })

  // Listen for extension installation and removal to update the list
  updateExtensionsList()
  browser.management.onInstalled.addListener(updateExtensionsList)
  browser.management.onUninstalled.addListener(updateExtensionsList)

  browser.runtime.onInstalled.addListener(enableExtensions)
})
