import {
  OBSOLETE,
} from '../actions/Card'

function cards(state = {}, action) {
  switch (action.type) {
    case OBSOLETE: {
      console.log('-----------------------')
      console.log(action)
      console.log(state)
      // console.log({
      //   ...state,
      //   ...state[title],
      //   questions: [
      //     state[title].questions,
      //     { question, answer }
      //   ]
      // })
      return state
      // return {
        // ...state,
        // ...state[title],
        // questions: [
        //   ...state[title].questions,
        //   { question, answer }
        // ]
      // }
    }
    default:
      return state
  }
}

export default cards
