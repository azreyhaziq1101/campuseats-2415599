import { useEffect, useState } from 'react'
import { subscribeToRecent, saveRecent } from '../services/recent.js'
import { useAuth } from './useAuth.js'

export function useRecentlyViewed() {
  const { user } = useAuth()
  const [recent, setRecent] = useState([])

  useEffect(() => {
    if (!user) {
      setRecent([])
      return
    }
    return subscribeToRecent(user.uid, setRecent, (err) => console.error(err))
  }, [user])

  function addViewed(item, vendor) {
    if (!user) return
    const entry = {
      id: item.id,
      name: item.name,
      price: item.price,
      vendorId: vendor.id,
      vendorName: vendor.name,
    }
    const next = [entry, ...recent.filter((r) => r.id !== item.id)].slice(0, 5)
    saveRecent(user.uid, next).catch((err) => console.error(err))
  }

  function clearRecent() {
    if (!user) return
    saveRecent(user.uid, []).catch((err) => console.error(err))
  }

  return { recent, addViewed, clearRecent }
}