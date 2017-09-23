import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { connect } from 'react-redux'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Swipeable from 'react-native-swipeable'

import { fetchFlashCardResults } from '../utils/api'
import { styles } from '../utils/styles'
import { Search, DeckAdd, DeckEdit, DeckRemove } from '../utils/icons'

import { receiveDecks, removeDeck } from '../actions/Deck'

class DeckMain extends Component {
  state = {
    query: '',
    currentlyOpenSwipeable: null,
  }

  componentDidMount() {
    fetchFlashCardResults()
      .then(decks => this.props.receiveDecks(decks))
  }

  closeSwipeable = () => {
    const {currentlyOpenSwipeable} = this.state

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter()
    }
  }

  renderItem = ({ item, itemProps }) => {
    if (item.title !== null) {
      return (
        <Swipeable style={styles.list}
          onRightButtonsOpenRelease={itemProps.onOpen}
          onRightButtonsCloseRelease={itemProps.onClose}
          rightButtons={[
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.closeSwipeable()

                  this.props.navigation.navigate(
                    'DeckEdit',
                    { operation: 'edit', oldTitle: item.title }
                  )
                }}
              >
                <DeckEdit />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.closeSwipeable()

                  Alert.alert(
                    'Are you sure you want to delete this deck and all of its cards?',
                    null,
                    [
                      {text: 'Cancel'},
                      {text: 'OK', onPress: () => this.props.removeDeck({ title: item.title })},
                    ],
                    { cancelable: false }
                  )
                }}
              >
                <DeckRemove />
              </TouchableOpacity>
            </View>
          ]}
        >
          <TouchableOpacity style={styles.deckMain}
            onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              { deckTitle: item.title }
            )}
          >
            <Text style={styles.deckTitle}>{item.title}</Text>
            <Text style={styles.deckBody}>{item.questions.length} cards</Text>
          </TouchableOpacity>
        </Swipeable>
      )
    }
  }

  render() {
    // Navigation
    const { navigation } = this.props

    // Store
    const { decks } = this.props

    // State
    const { query, currentlyOpenSwipeable } = this.state

    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter()
        }
        this.setState({currentlyOpenSwipeable: swipeable})
      },
      onClose: () => this.setState({currentlyOpenSwipeable: null}),
    }

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
            onPress={() => navigation.navigate(
              'DeckEdit',
              { operation: 'add' }
            )}
          >
            <DeckAdd />
          </TouchableOpacity>
        </View>

        <FlatList
          data={showingDecks}
          renderItem={({ item }) => this.renderItem({ item, itemProps })}
          keyExtractor={(item, index) => index}
        />

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
    receiveDecks: (data) => dispatch(receiveDecks(data)),
    removeDeck: (data) => dispatch(removeDeck(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckMain)
