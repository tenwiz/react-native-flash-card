export const ADD_CARD = 'ADD_CARD'
export const OBSOLETE = 'OBSOLETE'

export function addCard({ title, question, answer }) {
  return {
    type: ADD_CARD,
    title,
    question,
    answer,
  }
}

export function obsolete({ title, question, answer }) {
  return {
    type: OBSOLETE,
    title,
    question,
    answer,
  }
}
