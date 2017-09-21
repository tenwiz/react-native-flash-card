import { combineReducers } from 'redux'

import decks from './Deck'
import cards from './Card'

export default combineReducers({
  decks,
  cards,
})
