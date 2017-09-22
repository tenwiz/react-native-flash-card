import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, CardAdd } from '../utils/icons'

class DeckDetail extends Component {
  render() {
    // Store
    const { deck } = this.props

    const barTitle = `${deck.title} (${deck.questions.length})`

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeckMain')}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>{barTitle}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'CardEdit',
              { deckTitle: deck.title }
            )}
          >
            <CardAdd />
          </TouchableOpacity>
        </View>

        <Text>hello</Text>

      </View>
    )
  }
}

function mapStateToProps ({ decks }, { navigation }) {
  const { deckTitle } = navigation.state.params

  return {
    deck: decks[deckTitle]
  }
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckDetail)
