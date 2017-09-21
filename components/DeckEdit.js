import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'

class DeckEdit extends Component {
  state = {
    input: '',
  }

  render() {
    const { input } = this.state

    return (
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder='Deck Name'
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
