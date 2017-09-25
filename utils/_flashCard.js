import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'Martian:flashCard'

export function setDummyData(results) {
  const dummyData = {
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          result: null,
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    React: {
      title: 'React',
      questions: [
        {
          result: null,
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          result: null,
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
      ]
    }
  }

  if (results === null) {
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(dummyData))

    return dummyData
  } else {
    return (JSON.parse(results))
  }
}
