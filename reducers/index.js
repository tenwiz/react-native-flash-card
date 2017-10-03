import {
  RECEIVE_DECKS,
  ADD_DECK,
  EDIT_DECK,
  REMOVE_DECK,
} from '../actions/Deck'

import {
  ADD_CARD,
  EDIT_CARD,
  REMOVE_CARD,
  QUIZ_CARD,
} from '../actions/Card'

import { submitEntry } from '../utils/api'

function decks(state = {}, action) {
  const { title, question, answer,
          oldTitle, oldQuestion,
          newTitle, newQuestion, newAnswer, result } = action

  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks,
      }
    }
    case ADD_DECK: {
      submitEntry({ key: title,
                    entry: { title,
                             questions: [] } })
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        }
      }
    }
    case EDIT_DECK: {
      submitEntry({ key: oldTitle,
                    entry: { title: null } })
      submitEntry({ key: newTitle,
                    entry: { title: newTitle,
                             questions: state[oldTitle].questions } })
      return {
        ...state,
        [oldTitle]: {
          title: null,
        },
        [newTitle]: {
          title: newTitle,
          questions: state[oldTitle].questions,
        }
      }
    }
    case REMOVE_DECK: {
      submitEntry({ key: title,
                    entry: { title: null } })
      return {
        ...state,
        [title]: {
          title: null,
        }
      }
    }
    case ADD_CARD: {
      submitEntry({ key: title,
                    entry: { title,
                             questions: [{ result: null, question, answer }, ...state[title].questions] } })
      return {
        ...state,
        [title]: {
          title,
          questions: [{ result: null, question, answer }, ...state[title].questions]
        }
      }
    }
    case EDIT_CARD: {
      submitEntry({ key: title,
                    entry: { title,
                             questions: [{ result: null, question: newQuestion, answer: newAnswer }, ...state[title].questions.filter(item => item.question !== oldQuestion)] } })
      return {
        ...state,
        [title]: {
          title,
          questions: [{ result: null, question: newQuestion, answer: newAnswer }, ...state[title].questions.filter(item => item.question !== oldQuestion)]
        }
      }
    }
    case REMOVE_CARD: {
      submitEntry({ key: title,
                    entry: { title,
                             questions: [...state[title].questions.filter(item => item.question !== question)] } })
      return {
        ...state,
        [title]: {
          title,
          questions: [...state[title].questions.filter(item => item.question !== question)]
        }
      }
    }
    case QUIZ_CARD: {
      submitEntry({ key: title,
                    entry: { title,
                             questions: [...state[title].questions.map(item => {
                               return item.question === question
                                 ? { result, question: item.question, answer: item.answer }
                                 : item
                             })] } })
      return {
        ...state,
        [title]: {
          title,
          questions: [...state[title].questions.map(item => {
            return item.question === question
              ? { result, question: item.question, answer: item.answer }
              : item
          })]
        }
      }
    }
    default:
      return state
  }
}

export default decks
