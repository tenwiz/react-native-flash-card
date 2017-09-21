import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Check } from '../utils/icons'

class DeckEdit extends Component {
  state = {
    input: '',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('DeckDetail')}
        >
          <Check />
        </TouchableOpacity>
      )
    }
  }

  render() {
    const { input } = this.state

    return (
        <View style={styles.container}>
          <TextInput style={styles.deckName} placeholder='Deck Name'
              value={input}
              onChangeText={(input) => {this.setState({ input })}}
            />
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
)(DeckEdit)
