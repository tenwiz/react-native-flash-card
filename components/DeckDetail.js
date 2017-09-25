import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Swipeable from 'react-native-swipeable'
import escapeRegExp from 'escape-string-regexp'

import { styles } from '../utils/styles'
import { Back, CardAdd, Edit, Remove, Search } from '../utils/icons'
import { closeSwipeable } from '../utils/swipeable'

import { removeCard } from '../actions/Card'

class DeckDetail extends Component {
  state = {
    query: '',
    currentlyOpenSwipeable: null,
  }

  renderItem = ({ item, itemProps, deckTitle }) => {
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

                  this.props.navigation.navigate(
                    'CardEdit',
                    { operation: 'edit', deckTitle ,oldQuestion: item.question, oldAnswer: item.answer }
                  )
                }}
              >
                <Edit />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  closeSwipeable(this.state.currentlyOpenSwipeable)

                  this.props.removeCard({ title: deckTitle, question: item.question })
                }}
              >
                <Remove />
              </TouchableOpacity>
            </View>
          ]}
        >
          <TouchableOpacity style={styles.flatCard}
            onPress={() => this.props.navigation.navigate(
              'CardQuiz',
              { operation: 'individual', deckTitle, question: item.question, answer: item.answer }
            )}
          >
            <Text style={styles.cardTitle}>{item.question}</Text>
          </TouchableOpacity>
        </Swipeable>
      )
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const { key } = navigation.state.params

    // Store
    const { deck } = this.props

    // State
    const { query, currentlyOpenSwipeable } = this.state

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

    let showingCards
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingCards = deck.questions.filter((item) => match.test(item.question) || match.test(item.answer))
    } else {
      showingCards = deck.questions
    }

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack(key)}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>{barTitle}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(
              'CardEdit',
              { operation: 'add', deckTitle: deck.title }
            )}
          >
            <CardAdd />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.studyButton}
          onPress={() => navigation.navigate(
            'CardQuiz',
            { operation: 'group', deck }
          )}
        >
            <Text style={styles.buttonText}>STUDY</Text>
        </TouchableOpacity>

        <FlatList
          data={showingCards}
          renderItem={({ item }) => this.renderItem({ item, itemProps, deckTitle: deck.title })}
          keyExtractor={(item, index) => index}
        />

        <KeyboardAvoidingView style={styles.footer} behavior='padding'>
          <Search />
          <TextInput style={styles.search} placeholder='Search Cards'
            value={query}
            onChangeText={(query) => { this.setState({ query }) }}
          />
        </KeyboardAvoidingView>

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

function mapDispatchToProps (dispatch) {
  return {
    removeCard: (data) => dispatch(removeCard(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckDetail)
