import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as Progress from 'react-native-progress'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

import { quizCard } from '../actions/Card'

class Result extends Component {
  render() {
    // Navigation
    const { navigation } = this.props
    const { deck, right, total, key } = navigation.state.params

    // Store
    const { quizCard } = this.props

    const progress = right / total
    const allRight = right === total

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // Go back from the first CardQuiz page
              navigation.goBack(key)

              // Reset ALL results
              deck.questions.map(item => quizCard({ title: deck.title, question: item.question, result: null }))
            }}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>{deck.title} ({total})</Text>
        </View>

        <View style={styles.resultCircle}>
          <Progress.Circle
            size={250}
            progress={progress}
            showsText={true}
            formatText={() => {return `${Math.floor(progress * 100)}%`}}
            color={allRight ? '#007A3D' : '#CE1126'}
            thickness={5}
          />
        </View>

        <TouchableOpacity style={styles.resultButton}
          onPress={() => {
            if (allRight) {
              navigation.goBack(key)

              // Reset ALL results
              deck.questions.map(item => quizCard({ title: deck.title, question: item.question, result: null }))
            } else {
              navigation.navigate(
                'CardQuiz',
                { operation: 'retry', deckTitle: deck.title, key }
              )

              // Reset WRONG results
              deck.questions.filter(item => item.result === 'wrong').map(item => quizCard({ title: deck.title, question: item.question, result: null }))
            }
          }}
        >
            <Text style={styles.buttonText}>{allRight ? 'YOU NAILED IT!' : 'TRY AGAIN'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    quizCard: (data) => dispatch(quizCard(data)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Result)
