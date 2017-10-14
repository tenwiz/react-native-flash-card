import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'
import Swiper from 'react-native-deck-swiper'

import { styles, Gray50, Red, Green, White } from '../utils/styles'
import { Back } from '../utils/icons'
import { setLocalNotification, clearLocalNotification } from '../utils/notification'

import { quizCard } from '../actions/Card'

console.disableYellowBox = true

class CardQuiz extends Component {
  state = {
    cards: [],
    // Number of cards being quizzed (consider 'TRY AGAIN' in Result page), not necessarily the total number of cards of this deck
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
    // Operation could be
    // 'individual' (click on indivdual card in DeckDetail page),
    // 'group' (click on 'STUDY' in DeckDetail page) and
    // 'retry' (click on 'TRY AGAIN' in Result page)
    const { operation, deckTitle, card, key } = navigation.state.params

    // Store
    const { deck, quizCard } = this.props

    // State
    const { cards, total } = this.state

    const questions = deck.questions
    // TOTAL number of cards of this deck
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

              clearLocalNotification()
                .then(setLocalNotification)
            }}
            onSwipedRight={index => {
              quizCard({ title: deckTitle, question: cards[index].question, result: 'right' })

              clearLocalNotification()
                .then(setLocalNotification)
            }}
            onSwipedAll={() => {
              this.props.navigation.navigate(
                'Result',
                // Creat the key of first CardQuiz page, pass it between CardQuiz and Result, and finally go back from it in Result page
                { deck, right, total: all, key: operation === 'retry' ? key : navigation.state.key }
              )
            }}
            overlayLabels={{
              left: {
                title: 'NOT YET',
                style: {
                  label: {
                    backgroundColor: Red,
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                title: 'GOT IT',
                style: {
                  label: {
                    backgroundColor: Green,
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              },
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            backgroundColor={Gray50}
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

              // The results will be reset when exit Result page (click on any button),
              // however if you refresh in Result page the results won't be reset
              // and next time you click 'STUDY' in CardDetail page, no questions will show up
              if (total === 0) {
                // This will reset all results when above happens
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

export default connect(
  mapStateToProps,
  { quizCard },
)(CardQuiz)
