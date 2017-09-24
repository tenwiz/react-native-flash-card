import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FlipCard from 'react-native-flip-card'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

export default class Exemple extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: ['1', '2', '3'],
    }
  }

  renderCard = card => {
    return (
      <ScrollView>
        <FlipCard
          style={styles.flipCard}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
        >
          <View style={styles.flipSide}>
            <Text style={styles.face}>Martian?</Text>
          </View>
          <View style={styles.flipSide}>
            <Text style={styles.back}>Martian!</Text>
          </View>
        </FlipCard>
      </ScrollView>
    )
  };

  render () {
    return (
      <View style={stylesExample.container}>

        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={this.state.cards}
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
            onPress={() => {console.log('hi')}}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>Martian</Text>
        </View>

        <View>
          <Text style={styles.progress}>3 of 6</Text>
        </View>

      </View>
    )
  }
}

const stylesExample = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
})
