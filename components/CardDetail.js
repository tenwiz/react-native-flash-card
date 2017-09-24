import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'
import Swiper from 'react-native-deck-swiper'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

class CardDetail extends Component {
  state = {
    cards: [],
    finished: 0,
    total: 0,
  }

  componentDidMount() {
    const { deck } = this.props.navigation.state.params

    this.setState({
      finished: deck.questions.filter(item => item.result !== null).length,
      total: deck.questions.length,
      cards: deck.questions,
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

    // State
    const { cards, finished, total } = this.state

    return (
      <View style={styles.container}>

        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={cards}
          renderCard={this.renderCard}
          onSwipedLeft={() => {console.log('not yet')}}
          onSwipedRight={() => {console.log('got it')}}
          onSwipedAll={() => {console.log('finish')}}
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
          <Text style={styles.middle}>{deckTitle}</Text>
        </View>

        {operation === 'group'
          ? <View>
              <Text style={styles.progress}>{finished} of {total}</Text>
            </View>
          : <View>
              <Text style={styles.progress}></Text>
            </View>}

      </View>
    )
  }
}

function mapStateToProps () {
  return {}
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDetail)
