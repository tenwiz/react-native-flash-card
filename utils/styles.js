import { StyleSheet, Dimensions } from 'react-native'
import { Constants } from 'expo'

export const { width, height } = Dimensions.get('window')

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
  left: {
    marginLeft: 5,
    marginTop: 5,
    width: 50,
    textAlign: 'center',
  },
  middle: {
    width: width - 110,
    marginTop: 15,
    fontSize: 23,
    textAlign: 'center',
  },
  right: {
    marginTop: 5,
    width: 50,
    textAlign: 'center',
  },
  flatCard: {
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

  /*
  DeckMain
  */

  search: {
    width: width - 115,
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
  },
  list: {
    width
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

  cardTitle: {
    fontSize: 20,
    textAlign: 'center',
    width: width - 40,
  },
  studyButton: {
    backgroundColor: '#007A3D',
    width: 250,
    padding: 10,
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
  },
  studyText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  footer: {
    width,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: -3,
      width: 0,
    },
  },

  /*
  CardEdit
  */

  question: {
    width: width - 20,
    height: 50,
    padding: 5,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  answer: {
    width: width - 20,
    height: 500,
    padding: 5,
    marginTop: 10,
    fontSize: 20,
  },

  /*
  CardDetail
  */

  progress: {
    fontSize: 15,
    textAlign: 'center',
  },
  flipCard: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    width: width - 20,
    height: height - 200,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0,
  },
  flipSide: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  face: {
    fontSize: 25,
    textAlign: 'center',
    width: width - 40,
    color: '#CE1126',
  },
  back: {
    fontSize: 25,
    textAlign: 'center',
    width: width - 40,
    color: '#007A3D',
  },
  flexRow: {
    flexDirection: 'row',
  },
  leftButton: {
    backgroundColor: '#CE1126',
    width: (width - 20) / 2 - 5,
    height: 50,
    margin: 5,
    marginBottom: 20,
  },
  rightButton: {
    backgroundColor: '#007A3D',
    width: (width - 20) / 2 - 5,
    height: 50,
    margin: 5,
    marginBottom: 20,
  },
  studyedText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
})
