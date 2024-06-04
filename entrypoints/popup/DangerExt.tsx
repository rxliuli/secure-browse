import { createSignal, onMount } from 'solid-js'
import { Management } from 'wxt/browser'
import './DangerExt.css'

export function ExtView() {
  const [ext, setExt] = createSignal<Management.ExtensionInfo>()
  onMount(async () => {
    const extId = new URLSearchParams(location.search).get('id')
    if (!extId) {
      throw new Error('No ext id')
    }
    const ext = await browser.management.get(extId)
    if (!ext) {
      throw new Error('No ext found')
    }
    console.log('extId', ext)
    setExt(ext)
  })
  async function enableExtension() {
    await browser.management.setEnabled(ext()!.id, true)
    alert('Extension enabled')
    window.close()
  }
  return (
    <div class="container">
      <h2 class={'header'}>⚠️ Extension Disabled</h2>
      <p>
        The newly installed extension [
        <strong>
          <a
            href={`https://chrome.google.com/webstore/detail/${ext()?.id}`}
            target={'_blank'}
          >
            {ext()?.name}
          </a>
        </strong>
        ] can access cookies. This is very dangerous and has been automatically
        disabled.
      </p>
      <p>Accessed Domains:</p>
      <ul id="domain-list">
        {ext()?.hostPermissions?.map((it) => (
          <li>{it}</li>
        ))}
      </ul>
      <div class="button-container">
        <button class="enable-button" onClick={enableExtension}>
          Enable
        </button>
      </div>
    </div>
  )
}
