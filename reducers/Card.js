import {
  ADD_CARD,
} from '../actions/Card'

function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD: {
      return {}
    }
    default:
      return state
  }
}

export default cards
