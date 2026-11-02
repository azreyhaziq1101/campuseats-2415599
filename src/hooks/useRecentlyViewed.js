

// src/hooks/useRecentlyViewed.js
import { useLocalStorage } from './useLocalStorage.js'
export function useRecentlyViewed() {
  const [recent, setRecent] = useLocalStorage('campuseats-recent', [])

  function addViewed(item, vendor) {
    const entry = {
      id: item.id,
      name: item.name,
      price: item.price,
      vendorId: vendor.id,
      vendorName: vendor.name,
    }
    setRecent((prev) => [entry, ...prev.filter((r) => r.id !== item.id)].slice(0, 5))
  }

  const clearRecent = () => setRecent([])

  return { recent, addViewed, clearRecent }
}