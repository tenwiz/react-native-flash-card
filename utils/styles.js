import { StyleSheet, Dimensions } from 'react-native'
import { Constants } from 'expo'

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#E0E0E0',
    height: Constants.statusBarHeight ,
  },
  viewPort: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  left: {
    marginLeft: 5,
    marginTop: 5,
    width: 50,
    textAlign: 'center',
  },
  middle: {
    width: width - 110,
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  right: {
    marginTop: 5,
    width: 50,
    textAlign: 'center',
  },

  /*
  DeckMain
  */

  header: {
    width,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    marginBottom: 10,
  },
  search: {
    width: width - 115,
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
  },
  list: {
    width
  },
  deckMain: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    width: width - 20,
    height: 100,
    marginBottom: 10,
    marginLeft: 10,
  },
  deckTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  deckBody: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
  },

  /*
  DeckEdit
  */

  deckName: {
    width: 200,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 200,
  },

  /*
  DeckDetail
  */
})
