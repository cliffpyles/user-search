import { combineReducers } from 'redux'
import search from './search'
import details from './details'

const rootReducer = combineReducers({
  details,
  search
})

export default rootReducer
