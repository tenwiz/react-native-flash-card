import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

import { addCard } from '../actions/Card'

class CardEdit extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const { deckTitle } = navigation.state.params

    // Store
    const { addCard, questions } = this.props

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
            onPress={() => {
              const questionTrim = question.trim()
              const answerTrim = answer.trim()

              if (questionTrim === '' || answerTrim === '') {
                Alert.alert(
                  'Question or answer cannot be blank',
                  null,
                  [{text: 'OK'}],
                  { cancelable: false }
                )
                return
              }

              if (questions.indexOf(questionTrim) !== -1) {
                Alert.alert(
                  'This question has been asked',
                  null,
                  [{text: 'OK'}],
                  { cancelable: false }
                )
                return
              }

              // addCard({ title: deckTitle, question, answer })
              // navigation.goBack()
            }}
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

function mapStateToProps (decks, { navigation }) {
  const { deckTitle } = navigation.state.params

  return {
    questions: decks[deckTitle].questions.reduce((result, current) => {
      result.push(current.question)
      return result
    }, [])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCard: (data) => dispatch(addCard(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardEdit)
