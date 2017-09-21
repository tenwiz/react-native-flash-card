import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  render() {
    return (
      <View>
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
)(DeckDetail)
