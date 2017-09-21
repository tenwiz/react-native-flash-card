import { RECEIVE_DECKS, ADD_DECK } from '../actions/Deck'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_DECK: {
      return {}
    }
    default:
      return state
  }
}

export default decks
