import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { styles } from '../utils/styles'
import { Back, Check } from '../utils/icons'

class CardEdit extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate('DeckDetail')}
        >
          <Back />
        </TouchableOpacity>
      ),
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
    return (
      <View style={styles.container}>
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
