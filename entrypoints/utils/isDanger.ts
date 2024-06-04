import { Management } from 'wxt/browser'

export function isDangerExt(info: Management.ExtensionInfo) {
  return info.permissions?.includes('cookies')
}
