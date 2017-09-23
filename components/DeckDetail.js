import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Swipeable from 'react-native-swipeable'

import { styles } from '../utils/styles'
import { Back, CardAdd, Edit, Remove } from '../utils/icons'
import { closeSwipeable } from '../utils/swipeable'

class DeckDetail extends Component {
  state = {
    currentlyOpenSwipeable: null,
  }

  trim = (str) => {
    return str.length > 100
      ? str.slice(0, 100) + '...'
      : str
  }

  renderItem = ({ item, itemProps }) => {
    // if (item.title !== null) {
      return (
        <Swipeable style={styles.list}
          onRightButtonsOpenRelease={itemProps.onOpen}
          onRightButtonsCloseRelease={itemProps.onClose}
          rightButtonWidth={60}
          rightButtons={[
            <View>
              <TouchableOpacity
                onPress={() => {
                  closeSwipeable(this.state.currentlyOpenSwipeable)

                  // this.props.navigation.navigate(
                  //   'DeckEdit',
                  //   { operation: 'edit', oldTitle: item.title }
                  // )
                }}
              >
                <Edit />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  closeSwipeable(this.state.currentlyOpenSwipeable)
                }}
              >
                <Remove />
              </TouchableOpacity>
            </View>
          ]}
        >
          <TouchableOpacity style={styles.card}
            // onPress={() => this.props.navigation.navigate(
            //   'DeckDetail',
            //   { deckTitle: item.title }
            // )}
          >
            <Text style={styles.cardTitle}>{this.trim(item.question)}</Text>
          </TouchableOpacity>
        </Swipeable>
      )
    // }
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

        <FlatList
          data={deck.questions}
          renderItem={({ item }) => this.renderItem({ item, itemProps })}
          keyExtractor={(item, index) => index}
        />

      </View>
    )
  }
}

function mapStateToProps ( decks, { navigation }) {
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
