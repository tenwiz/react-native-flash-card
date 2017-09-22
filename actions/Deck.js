export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const EDIT_DECK = 'EDIT_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck({ title }) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function editDeck({ oldTitle, newTitle }) {
  return {
    type: EDIT_DECK,
    oldTitle,
    newTitle,
  }
}
