import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StackNavigator } from 'react-navigation'

import { styles } from './utils/styles'
import DeckMain from './components/DeckMain'
import DeckEdit from './components/DeckEdit'
import DeckDetail from './components/DeckDetail'
import CardEdit from './components/CardEdit'

import reducer from './reducers'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Navigator = StackNavigator({
  DeckMain: {
    screen: DeckMain,
    navigationOptions: {
      header: null,
    },
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      header: null,
    },
  },
  CardEdit: {
    screen: CardEdit,
    navigationOptions: {
      header: null,
    },
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.viewPort}>
          <View style={styles.statusBar}>
            <StatusBar />
          </View>
          <Navigator />
        </View>
      </Provider>
    )
  }
}
