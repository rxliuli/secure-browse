import { ExtView } from './DangerExt'
import { HomeView } from './HomeView'

export function App() {
  const hasId = new URLSearchParams(location.search).get('id')
  return hasId ? <ExtView /> : <HomeView />
}
