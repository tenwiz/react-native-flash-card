import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

class CardEdit extends Component {
  render() {
    // Navigation
    const { deckTitle } = this.props.navigation.state.params

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              { deckTitle }
            )}
          >
            <Back />
          </TouchableOpacity>
          <Text style={styles.middle}>CARD</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              { deckTitle }
            )}
          >
            <Check />
          </TouchableOpacity>
        </View>

        <Text>hello</Text>

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
