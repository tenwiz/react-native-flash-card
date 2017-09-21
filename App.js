import React from 'react'
import { Text, View, StatusBar, TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import reducer from './reducers'
import Deck from './components/Deck'
import DeckEdit from './components/DeckEdit'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Navigator = StackNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      header: null,
    }
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: 'black',
      headerStyle: {
        paddingTop: 0,
      },
      headerRight: (
        <TouchableOpacity>
          <Ionicons name='ios-checkmark' size={50} style={{marginRight: 10, marginTop: 5}} />
        </TouchableOpacity>
      )
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={'gray'} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    )
  }
}
