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
  back: {
    // marginLeft: 10,
    // marginTop: 2,
  },
  check: {
    // marginRight: 10,
    // marginTop: 5,
  },

  /*
  DeckMain
  */

  header: {
    flexDirection: 'row',
    width,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  search: {
    height: 50,
    width: width - 110,
    marginLeft: 10,
    fontSize: 20,
  },
  deckMain: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    width: width - 20,
    height: 100,
    marginBottom: 10,
  },
  deckText: {
    width: width - 100,
    marginLeft: 20,
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
  deckEdit: {
    marginTop: 8,
  },
  deckRemove: {
    marginTop: 13,
  },

  /*
  DeckEdit
  */

  deckName: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 250,
  },

  /*
  DeckDetail
  */

  cardAdd: {
    marginRight: 10,
    marginTop: 6,
  },
})
