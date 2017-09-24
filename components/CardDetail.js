import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'

import { styles } from '../utils/styles'
import { Back } from '../utils/icons'

class CardDetail extends Component {
  render() {
    // Navigation
    // const { navigation } = this.props
    // const { deckTitle, question, answer } = navigation.state.params

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>Martian</Text>
        </View>

        <View>
          <Text style={styles.progress}>3 of 6</Text>
        </View>

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

        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.leftButton}
            // onPress={onDecrement}
          >
              <Text style={styles.studyText}>Not yet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}
            // onPress={onIncrement}
          >
              <Text style={styles.studyText}>Got it!</Text>
          </TouchableOpacity>
        </View>

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
