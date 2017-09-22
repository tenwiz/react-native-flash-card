import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Swipeable from 'react-native-swipeable'

import { fetchFlashCardResults } from '../utils/api'
import { styles } from '../utils/styles'
import { Search, DeckAdd, DeckEdit, DeckRemove } from '../utils/icons'

import { receiveDecks } from '../actions/Deck'

class DeckMain extends Component {
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
          <Search />
          <TextInput style={styles.search} placeholder='Search decks'
              value={query}
              onChangeText={(query) => { this.setState({ query }) }}
            />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeckEdit')}
          >
            <DeckAdd />
          </TouchableOpacity>
        </View>

        {showingDecks.map(deck => (
          <Swipeable key={deck.title}
              rightButtons={[
                <View>
                  <TouchableOpacity><DeckEdit /></TouchableOpacity>
                  <TouchableOpacity><DeckRemove /></TouchableOpacity>
                </View>
              ]}
            >
            <TouchableOpacity style={styles.deckMain}
              onPress={() => this.props.navigation.navigate(
                'DeckDetail',
                { deckTitle: deck.title }
              )}
            >
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text style={styles.deckBody}>{deck.questions.length} cards</Text>
            </TouchableOpacity>
          </Swipeable>
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
)(DeckMain)
