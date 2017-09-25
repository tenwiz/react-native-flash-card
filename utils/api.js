import { AsyncStorage } from 'react-native'

import { setDummyData, FLASHCARD_STORAGE_KEY } from './_flashCard'

export function fetchFlashCardResults() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(setDummyData)
}

export function submitEntry ({ key, entry }) {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

// export function fetchFlashCardResults() {
//   AsyncStorage.clear(FLASHCARD_STORAGE_KEY)
// }
