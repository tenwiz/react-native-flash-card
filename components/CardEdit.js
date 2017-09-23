import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

class CardEdit extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    // Navigation
    const { navigation } = this.props
    // const { deckTitle } = navigation.state.params

    // State
    const { question, answer } = this.state

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>CARD</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Check />
          </TouchableOpacity>
        </View>

        <View>
          <TextInput style={styles.question} placeholder='Question'
            value={question}
            onChangeText={(input) => { this.setState({ question: input }) }}
          />
          <TextInput style={styles.answer} placeholder='Answer'
            value={answer}
            onChangeText={(input) => { this.setState({ answer: input }) }}
            multiline = {true}
          />
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
)(CardEdit)
