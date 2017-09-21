import React from 'react'
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'

import { styles } from './styles'

export function Back() {
  return (
    <Ionicons style={styles.back} name='ios-arrow-back' size={30} />
  )
}

export function Check() {
  return (
    <Ionicons style={styles.check} name='ios-checkmark' size={50} />
  )
}

/*
DeckMain
*/

export function Search() {
  return (
    <Ionicons name='ios-search' size={50} />
  )
}

export function DeckAdd() {
  return (
    <Ionicons name='ios-add' size={50} />
  )
}

export function DeckEdit() {
  return (
    <FontAwesome style={styles.deckEdit} name='edit' size={20} />
  )
}

export function DeckRemove() {
  return (
    <FontAwesome style={styles.deckRemove} name='trash-o' size={20} />
  )
}

/*
DeckDetail
*/

export function CardAdd() {
  return (
    <Entypo style={styles.cardAdd} name='add-to-list' size={30} />
  )
}
