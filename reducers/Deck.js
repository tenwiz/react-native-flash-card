import {
  RECEIVE_DECKS,
  ADD_DECK,
} from '../actions/Deck'

function decks(state = {}, action) {
  const { title } = action
  console.log(title)
  console.log(action)

  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks,
      }
    }
    case ADD_DECK: {
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        }
      }
    }
    default:
      return state
  }
}

export default decks
