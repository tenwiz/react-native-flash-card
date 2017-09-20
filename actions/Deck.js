export const ADD_DECK = 'ADD_DECK'

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}
