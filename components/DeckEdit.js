import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Check } from '../utils/icons'

import { addDeck } from '../actions/Deck'

class DeckEdit extends Component {
  state = {
    input: '',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            const { input, addDeck, deckTitles } = navigation.state.params

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

            navigation.navigate(
              'DeckDetail',
              { deckTitle: input }
            )
          }}
        >
          <Check />
        </TouchableOpacity>
      )
    }
  }

  componentDidMount() {
    const { addDeck, deckTitles } = this.props

    this.props.navigation.setParams({ addDeck, deckTitles })
  }

  render() {
    const { input } = this.state

    return (
        <View style={styles.container}>
          <TextInput style={styles.deckName} placeholder='Deck Name'
              value={input}
              onChangeText={(input) => {
                this.setState({ input })
                this.props.navigation.setParams({ input })
              }}
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
