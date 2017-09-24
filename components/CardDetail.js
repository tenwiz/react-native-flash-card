import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

class CardDetail extends Component {
  render() {
    // Navigation
    const { navigation } = this.props
    const { operation, deckTitle, question, answer } = navigation.state.params

    return (
      <View style={styles.container}>

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
              <Text style={styles.progress}>3 of 6</Text>
            </View>
          : <View>
              <Text style={styles.progress}></Text>
            </View>}

        <ScrollView>
          <FlipCard
            style={styles.flipCard}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
          >
            <View style={styles.flipSide}>
              <Text style={styles.face}>{question}</Text>
            </View>
            <View style={styles.flipSide}>
              <Text style={styles.back}>{answer}</Text>
            </View>
          </FlipCard>
        </ScrollView>

        {operation === 'group' && (
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.leftButton}
              // onPress={onDecrement}
            >
              <Text style={styles.studyedText}>Not yet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightButton}
              // onPress={onIncrement}
            >
              <Text style={styles.studyedText}>Got it!</Text>
            </TouchableOpacity>
          </View>)}

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
