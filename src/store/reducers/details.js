import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEEDED,
  GET_DETAILS_FAILED
} from '../actions'

const detailsReducer = (
  state = {
    isPending: false,
    errors: [],
    profile: {}
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case GET_DETAILS_REQUESTED:
      return {
        ...state,
        isPending: true
      }
    case GET_DETAILS_SUCCEEDED:
      const { data } = payload
      return {
        ...state,
        isPending: false,
        profile: data
      }
    case GET_DETAILS_FAILED:
      return {
        ...state,
        isPending: false,
        errors: [...state.errors, payload]
      }
    default:
      return state
  }
}

export default detailsReducer
