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
    const { deck } = this.props
    const questions = deck.questions.filter(item => item.result === null)

    this.setState({
      cards: questions,
      total: questions.length,
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
    const { operation, deckTitle, card, key } = navigation.state.params

    // Store
    const { deck, quizCard } = this.props

    // State
    const { cards, total } = this.state

    const questions = deck.questions
    const all = questions.length
    const unawsered = questions.filter(item => item.result === null).length
    const right = questions.filter(item => item.result === 'right').length



    return (
      <View style={styles.container}>

        {operation !== 'individual' &&
          <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            cards={cards}
            renderCard={this.renderCard}
            onSwipedLeft={index => {
              quizCard({ title: deckTitle, question: cards[index].question, result: 'wrong' })
            }}
            onSwipedRight={index => {
              quizCard({ title: deckTitle, question: cards[index].question, result: 'right' })
            }}
            onSwipedAll={() => {
              this.props.navigation.navigate(
                'Result',
                { deck, right, total: all, key: operation === 'retry' ? key : navigation.state.key }
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
          </Swiper>}

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()

              if (total === 0) {
                questions.map(item => quizCard({ title: deck.title, question: item.question, result: null }))
              }
            }}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>{deckTitle}</Text>
        </View>

        {(operation !== 'individual') && (total !== 0)
          ? <View>
              <Text style={styles.progress}>{(total - unawsered) < total ? total - unawsered + 1 : total} of {total}</Text>
            </View>
          : <View>
              <Text style={styles.progress}></Text>
            </View>}

        {operation === 'individual' && this.renderCard(card)}

        {total === 0 &&
          <View>
            <Text style={styles.progress}>Please go back and click STUDY again</Text>
          </View>
        }

      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {
  const { deckTitle } = navigation.state.params

  return {
    deck: decks[deckTitle]
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
