import clsx from 'clsx'
import { onMount, createSignal } from 'solid-js'
import { Management } from 'wxt/browser'

export function App() {
  const [extensions, setExtensions] = createSignal<Management.ExtensionInfo[]>(
    [],
  )
  const refresh = async () => {
    const exts = await browser.management.getAll()
    const dangerousExtensions = exts.filter((extension) =>
      extension.permissions?.includes('cookies'),
    )
    console.log('Dangerous extensions:', dangerousExtensions)
    setExtensions(dangerousExtensions)
  }

  onMount(refresh)

  const toggleExtension = async (id: string, enabled: boolean) => {
    await browser.management.setEnabled(id, !enabled)
    await refresh()
  }

  return (
    <div>
      <h2>Dangerous Extensions</h2>
      {extensions().map((extension) => (
        <li
          class={clsx(
            'item',
            'extension-status',
            extension.enabled ? 'enabled' : 'disabled',
          )}
        >
          <span>{extension.name}</span>
          <button
            class={clsx(
              'toggle-button',
              extension.enabled ? 'disable' : 'enable',
            )}
            onClick={() => toggleExtension(extension.id, extension.enabled)}
          >
            {extension.enabled ? 'Disable' : 'Enable'}
          </button>
        </li>
      ))}
    </div>
  )
}
