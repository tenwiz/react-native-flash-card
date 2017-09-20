import { ADD_DECK } from '../actions/Deck'

function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK: {
      return {}
    }
    default:
      return state
  }
}

export default decks
