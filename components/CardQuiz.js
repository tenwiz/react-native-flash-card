import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'
import Swiper from 'react-native-deck-swiper'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

import { quizCard } from '../actions/Card'

class CardQuiz extends Component {
  state = {
    cards: [],
    total: '',
  }

  componentDidMount() {
    const { deck } = this.props.navigation.state.params

    this.setState({
      cards: deck.questions.filter(item => item.result === null),
      total: deck.questions.length,
    })
  }

  renderCard = (card) => {
    if (card) {
      return (
        <ScrollView>
          <FlipCard
            style={styles.flipCard}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
          >
            <View style={styles.flipSide}>
              <Text style={styles.face}>{card.question}</Text>
            </View>
            <View style={styles.flipSide}>
              <Text style={styles.back}>{card.answer}</Text>
            </View>
          </FlipCard>
        </ScrollView>
      )
    }
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const { operation, deck, deckTitle, question, answer } = navigation.state.params

    // Store
    const { right, wrong, quizCard } = this.props

    // State
    const { cards, total } = this.state

    return (
      <View style={styles.container}>

        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={cards}
          renderCard={this.renderCard}
          onSwipedLeft={index => {
            quizCard({ title: deck.title, question: cards[index].question, result: 'wrong' })
          }}
          onSwipedRight={index => {
            quizCard({ title: deck.title, question: cards[index].question, result: 'right' })
          }}
          onSwipedAll={() => {
            this.props.navigation.navigate(
              'Result',
              { deckTitle: deck.title, right, total, key: navigation.state.key }
            )
          }}
          overlayLabels={{
            left: {
              title: 'NOT YET',
              swipeColor: '#CE1126',
              backgroundOpacity: '0.75',
              fontColor: '#FFF'
            },
            right: {
              title: 'GOT IT',
              swipeColor: '#007A3D',
              backgroundOpacity: '0.75',
              fontColor: '#FFF'
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          backgroundColor='#FAFAFA'
          verticalSwipe={false}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          marginTop={110}
        >
        </Swiper>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>{deck.title}</Text>
        </View>

        {operation === 'group'
          ? <View>
              <Text style={styles.progress}>{(right + wrong) < total ? right + wrong + 1 : total} of {total}</Text>
            </View>
          : <View>
              <Text style={styles.progress}></Text>
            </View>}

      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {
  const { deck } = navigation.state.params
  const questions = decks[deck.title].questions

  return {
    right: questions.filter(item => item.result === 'right').length,
    wrong: questions.filter(item => item.result === 'wrong').length,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    quizCard: (data) => dispatch(quizCard(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardQuiz)
