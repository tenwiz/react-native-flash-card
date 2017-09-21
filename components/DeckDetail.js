import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, CardAdd } from '../utils/icons'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deckTitle,
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate('DeckMain')}
        >
          <Back />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('CardEdit')}
        >
          <CardAdd />
        </TouchableOpacity>
      )
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { deckTitle } = navigation.state.params

  return {
    deck: state[deckTitle]
  }
}

function mapDispatchToProps () {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckDetail)
