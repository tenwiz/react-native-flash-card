export const ADD_CARD = 'ADD_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

export function addCard({ title, question, answer }) {
  return {
    type: ADD_CARD,
    title,
    question,
    answer,
  }
}

export function editCard({ title, oldQuestion, newQuestion, newAnswer }) {
  return {
    type: EDIT_CARD,
    title,
    oldQuestion,
    newQuestion,
    newAnswer,
  }
}

export function removeCard({ title, question }) {
  return {
    type: REMOVE_CARD,
    title,
    question,
  }
}
