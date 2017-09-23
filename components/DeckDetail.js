import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { styles } from '../utils/styles'
import { Back, CardAdd } from '../utils/icons'

class DeckDetail extends Component {
  state = {
    currentlyOpenSwipeable: null,
  }

  render() {
    // Navigation
    const { navigation } = this.props

    // Store
    const { deck } = this.props

    // State
    const { currentlyOpenSwipeable } = this.state

    const barTitle = `${deck.title} (${deck.questions.length})`

    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter()
        }
        this.setState({currentlyOpenSwipeable: swipeable})
      },
      onClose: () => this.setState({currentlyOpenSwipeable: null}),
    }

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack(navigation.state.params.key)
            }}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>{barTitle}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(
              'CardEdit',
              { deckTitle: deck.title }
            )}
          >
            <CardAdd />
          </TouchableOpacity>
        </View>

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
