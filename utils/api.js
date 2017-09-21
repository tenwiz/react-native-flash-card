import { AsyncStorage } from 'react-native'
import { setDummyData, FLASHCARD_STORAGE_KEY } from './_flashCard'

export function fetchFlashCardResults() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(setDummyData)
}
