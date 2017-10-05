import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

import { addCard, editCard } from '../actions/Card'

class CardEdit extends Component {
  state = {
    question: '',
    answer: '',
  }

  componentDidMount() {
    const { operation, oldQuestion, oldAnswer } = this.props.navigation.state.params

    if (operation === 'edit') {
      this.setState({ question: oldQuestion, answer: oldAnswer })
    }
  }

  render() {
    // Navigation
    const { navigation } = this.props
    const { operation, deckTitle, oldQuestion } = navigation.state.params

    // Store
    const { addCard, editCard, questions } = this.props

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

              if (questions.indexOf(questionTrim) !== -1 && questionTrim !== oldQuestion) {
                Alert.alert(
                  'This question has been added',
                  null,
                  [{text: 'OK'}],
                  { cancelable: false }
                )
                return
              }

              if (operation === 'add') {
                addCard({ title: deckTitle, question: questionTrim, answer: answerTrim })
              } else if (operation === 'edit') {
                editCard({ title: deckTitle, oldQuestion, newQuestion: questionTrim, newAnswer: answerTrim })
              }

              navigation.goBack()
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

export default connect(
  mapStateToProps,
  { addCard, editCard },
)(CardEdit)
