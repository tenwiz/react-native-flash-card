import { StyleSheet, Dimensions } from 'react-native'

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },


  header: {
    flexDirection: 'row',
  },
  searchInput: {
    height: 60,
    width: width - 110,
    marginLeft: 10,
    fontSize: 20,
  },
  deck: {
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
  deckNum: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  iconEdit: {
    marginTop: 5,
  },
  iconTrash: {
    marginTop: 15,
  },

  input: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 250,
  },
})
