import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as Progress from 'react-native-progress'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

class Result extends Component {
  render() {
    // Navigation
    const { navigation } = this.props
    const { deckTitle, right, total, key } = navigation.state.params

    const progress = right / total
    const boolean = right === total

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack(key)}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>Martian (6)</Text>
        </View>

        <View style={styles.resultCircle}>
          <Progress.Circle
            size={250}
            progress={progress}
            showsText={true}
            formatText={() => {return `${Math.floor(progress * 100)}%`}}
            color={boolean ? '#007A3D' : '#CE1126'}
            thickness={5}
          />
        </View>

        <TouchableOpacity style={styles.resultButton}
          onPress={() => navigation.goBack(key)}
        >
            <Text style={styles.buttonText}>{boolean ? 'YOU NAILED IT!' : 'TRY AGAIN'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

function mapStateToProps (decks, { navigation }) {
  // const { deck } = navigation.state.params
  // const questions = decks[deck.title].questions

  return {
  //   right: questions.filter(item => item.result === 'right').length,
  //   wrong: questions.filter(item => item.result === 'wrong').length,
  }
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result)
