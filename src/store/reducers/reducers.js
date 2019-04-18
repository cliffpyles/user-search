import { combineReducers } from 'redux'
import {
  SEARCH_INPUT_CHANGED,
  SEARCH_REQUESTED,
  SEARCH_SUCCEEDED,
  SEARCH_FAILED
} from '../actions'

const searchReducer = (
  state = {
    input: '',
    isPending: false,
    results: null,
    errors: [],
    resultsPrevious: null,
    resultsNext: null,
    resultsFirst: null,
    resultsLast: null
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case SEARCH_INPUT_CHANGED:
      return {
        ...state,
        input: payload
      }
    case SEARCH_REQUESTED:
      return {
        ...state,
        isPending: true
      }
    case SEARCH_SUCCEEDED:
      const { items = [], links = {} } = payload

      return {
        ...state,
        isPending: false,
        results: items,
        resultsPrevious: links.prev,
        resultsNext: links.next,
        resultsFirst: links.first,
        resultsLast: links.last
      }
    case SEARCH_FAILED:
      return {
        ...state,
        isPending: false,
        errors: [...state.errors, payload]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  search: searchReducer
})

export default rootReducer
