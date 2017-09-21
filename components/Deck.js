import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import { fetchFlashCardResults } from '../utils/api'
import { white } from '../utils/colors'

import { receiveDecks } from '../actions/Deck'

class Deck extends Component {
  state = {
    query: ''
  }

  componentDidMount() {
    fetchFlashCardResults()
      .then(decks => this.props.receiveDecks(decks))
  }

  render() {
    const { query } = this.state
    const { decks } = this.props
    // console.log(decks)

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
          <FontAwesome name='search' size={50} />
          <TextInput style={{height: 60, width: width - 110, fontSize: 20,}}
              value={query}
              placeholder='Search decks'
              onChangeText={(query) => {this.setState({ query })}}
            />
          <Entypo name='add-to-list' size={50} />
        </View>

        {showingDecks.map(deck => (
            <View style={styles.deck} key={deck.title}>
              <View style={{width: width - 100, marginLeft: 20}}>
                <Text style={{fontSize: 30, textAlign: 'center'}}>{deck.title}</Text>
                <Text style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>{deck.questions.length} cards</Text>
              </View>
              <View>
                <FontAwesome name='edit' size={20} style={{marginTop: 5}}/>
                <FontAwesome name='trash-o' size={20} style={{marginTop: 15}}/>
              </View>
            </View>
          ))}


      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: white,
  },
  header: {
    flexDirection: 'row',
  },
  deck: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    width: width - 20,
    height: 100,
    marginBottom: 10,
  },
})

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