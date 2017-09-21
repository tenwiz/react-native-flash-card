import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import { fetchFlashCardResults } from '../utils/api'
import { styles } from '../utils/styles'

import { receiveDecks } from '../actions/Deck'

class Deck extends Component {
  state = {
    query: '',
  }

  componentDidMount() {
    fetchFlashCardResults()
      .then(decks => this.props.receiveDecks(decks))
  }

  render() {
    // Store
    const { decks } = this.props

    // State
    const { query } = this.state

    let showingDecks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingDecks = decks.filter((deck) => match.test(deck.title))
    } else {
      showingDecks = decks
    }

    showingDecks.sort(sortBy('name'))

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Ionicons name='ios-search' size={50} />
          <TextInput style={styles.searchInput} placeholder='Search decks'
              value={query}
              onChangeText={(query) => {this.setState({ query })}}
            />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeckEdit')}
          >
            <Ionicons name='ios-add' size={50} />
          </TouchableOpacity>
        </View>

        {showingDecks.map(deck => (
            <View style={styles.deck} key={deck.title}>
              <View style={styles.deckText}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckNum}>{deck.questions.length} cards</Text>
              </View>
              <View>
                <FontAwesome style={styles.iconEdit} name='edit' size={20} />
                <FontAwesome style={styles.iconTrash} name='trash-o' size={20} />
              </View>
            </View>
          ))}

      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks: Object.keys(decks).reduce((result, id) => {
      result.push(decks[id])
      return result
    }, [])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    receiveDecks: (data) => dispatch(receiveDecks(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deck)
