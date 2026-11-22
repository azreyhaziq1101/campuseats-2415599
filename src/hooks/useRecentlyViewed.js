import { useLocalStorage } from './useLocalStorage.js'
import { useAuth } from './useAuth.js'

export function useRecentlyViewed() {
  const { user } = useAuth()
  const [stored, setStored] = useLocalStorage(
    user ? `ce-recent-${user.uid}` : 'ce-recent-guest',
    []
  )

  const recent = user ? stored : [] // guests see nothing

  function addViewed(item, vendor) {
    if (!user) return // guests: nothing saved
    const entry = {
      id: item.id,
      name: item.name,
      price: item.price,
      vendorId: vendor.id,
      vendorName: vendor.name,
    }
    setStored((prev) => [entry, ...prev.filter((r) => r.id !== item.id)].slice(0, 5))
  }

  const clearRecent = () => setStored([])

  return { recent, addViewed, clearRecent }
}