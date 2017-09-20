export const ADD_CARD = 'ADD_CARD'

export function addDeck(deck) {
  return {
    type: ADD_CARD,
    deck
  }
}
