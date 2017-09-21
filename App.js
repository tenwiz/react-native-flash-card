import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation'

import reducer from './reducers'
import Deck from './components/Deck'
import { gray, white } from './utils/colors'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Navigator = StackNavigator({
  Home: {
    screen: Deck,
    navigationOptions: {
      header: null,
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={gray} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    )
  }
}
