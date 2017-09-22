import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

import { addDeck } from '../actions/Deck'

class DeckEdit extends Component {
  state = {
    input: '',
  }

  render() {
    // Store
    const { addDeck, deckTitles } = this.props

    // State
    const { input } = this.state

    return (
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeckMain')}
            >
              <Back />
            </TouchableOpacity>
            <Text style={styles.middle}>Deck</Text>
            <TouchableOpacity
              onPress={() => {
                if (deckTitles.indexOf(input) !== -1) {
                  Alert.alert(
                    'This name has been used',
                    null,
                    [{text: 'OK'}],
                    { cancelable: false }
                  )
                  return
                }

                addDeck({ title: input })

                this.props.navigation.navigate(
                  'DeckDetail',
                  { deckTitle: input }
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
    addDeck: (data) => dispatch(addDeck(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckEdit)
