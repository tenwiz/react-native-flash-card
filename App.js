import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Constants } from 'expo'
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
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
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
      title: 'Deck',
      headerTintColor: 'black',
      headerStyle: {
        paddingTop: 0,
      },
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        paddingTop: 0,
      },
    },
  },
  CardEdit: {
    screen: CardEdit,
    navigationOptions: {
      title: 'Card',
      headerTintColor: 'black',
      headerStyle: {
        paddingTop: 0,
      },
    },
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.viewPort}>
          <AppStatusBar backgroundColor={'gray'} barStyle='light-content' />
          <Navigator />
        </View>
      </Provider>
    )
  }
}
