import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Constants } from 'expo'

import reducer from './reducers'
import Deck from './components/Deck'
import { purple, white } from './utils/colors'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <Deck/>
        </View>
      </Provider>
    )
  }
}
