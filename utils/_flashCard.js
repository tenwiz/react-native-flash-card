import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'flashCard'

export function setDummyData(results) {
  const dummyData = {
    TestE: {
      title: 'TestE',
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
        }
      ]
    },
    TestD: {
      title: 'TestD',
      questions: [
        {
          result: null,
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    TestC: {
      title: 'TestC',
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
        }
      ]
    },
    TestB: {
      title: 'TestB',
      questions: [
        {
          result: null,
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    TestA: {
      title: 'TestA',
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
        }
      ]
    },
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
        {
          result: null,
          question: 'TestA',
          answer: 'A library for managing user interfaces'
        },
        {
          result: null,
          question: 'TestB',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          result: null,
          question: 'TestC',
          answer: 'A library for managing user interfaces'
        },
        {
          result: null,
          question: 'TestD',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          result: null,
          question: 'TestE',
          answer: 'A library for managing user interfaces'
        }
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
