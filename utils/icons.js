import React from 'react'
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'

import { styles } from './styles'

export function Back() {
  return (
    <Ionicons style={styles.left} name='ios-arrow-back' size={50} />
  )
}

export function Check() {
  return (
    <Ionicons style={styles.right} name='md-checkmark' size={50} />
  )
}

/*
DeckMain
*/

export function Search() {
  return (
    <Ionicons style={styles.left} name='ios-search' size={50} />
  )
}

export function DeckAdd() {
  return (
    <Ionicons style={styles.right} name='ios-add' size={50} />
  )
}

export function DeckEdit() {
  return (
    <FontAwesome name='edit' size={50} />
  )
}

export function DeckRemove() {
  return (
    <FontAwesome name='trash-o' size={50} />
  )
}

/*
DeckDetail
*/

export function CardAdd() {
  return (
    <Entypo style={styles.right} name='add-to-list' size={50} />
  )
}
