import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../firebase.js'

// Live list of my recently viewed items. Returns unsubscribe.
export function subscribeToRecent(uid, onData, onError) {
  return onSnapshot(
    doc(db, 'recent', uid),
    (snap) => onData(snap.exists() ? snap.data().items ?? [] : []),
    onError,
  )
}

// Newest first, no duplicates, max 5.
export function saveRecent(uid, items) {
  return setDoc(doc(db, 'recent', uid), { items }, { merge: true })
}