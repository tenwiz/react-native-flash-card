import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

import { addDeck, editDeck } from '../actions/Deck'

class DeckEdit extends Component {
  state = {
    input: '',
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const { operation, oldTitle } = navigation.state.params

    // Store
    const { addDeck, editDeck, deckTitles } = this.props

    // State
    const { input } = this.state

    return (
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Back />
            </TouchableOpacity>
            <Text style={styles.middle}>DECK</Text>
            <TouchableOpacity
              onPress={() => {
                const inputTrim = input.trim()

                if (inputTrim === '') {
                  Alert.alert(
                    'You have to enter a name',
                    null,
                    [{text: 'OK'}],
                    { cancelable: false }
                  )
                  return
                }

                if (deckTitles.indexOf(inputTrim) !== -1) {
                  Alert.alert(
                    'This name has been used',
                    null,
                    [{text: 'OK'}],
                    { cancelable: false }
                  )
                  return
                }

                if (operation === 'add') {
                  addDeck({ title: inputTrim })
                } else if (operation === 'edit') {
                  editDeck({ oldTitle, newTitle: inputTrim })
                }

                navigation.navigate(
                  'DeckDetail',
                  { deckTitle: inputTrim, key: navigation.state.key }
                )
              }}
            >
              <Check />
            </TouchableOpacity>
          </View>

          <TextInput style={styles.deckName} placeholder='Deck Name'
            value={input}
            onChangeText={(input) => { this.setState({ input }) }}
          />
        </View>
      )
  }
}

function mapStateToProps ({ decks }) {
  return {
    deckTitles: Object.keys(decks).reduce((result, id) => {
      result.push(decks[id].title)
      return result
    }, [])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addDeck: (data) => dispatch(addDeck(data)),
    editDeck: (data) => dispatch(editDeck(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckEdit)
