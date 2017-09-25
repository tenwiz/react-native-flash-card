import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    return (
      <View>
        <Text>hello</Text>
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
