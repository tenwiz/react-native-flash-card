import { StyleSheet, Dimensions } from 'react-native'

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  viewPort: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  back: {
    marginLeft: 10,
    marginTop: 2,
  },
  check: {
    marginRight: 10,
    marginTop: 5,
  },

  /*
  DeckMain
  */

  header: {
    flexDirection: 'row',
  },
  search: {
    height: 50,
    width: width - 110,
    marginLeft: 10,
    fontSize: 20,
  },
  deckMain: {
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
