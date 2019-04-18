import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEEDED,
  GET_DETAILS_FAILED
} from '../actions'

const detailsReducer = (
  state = {
    isPending: false,
    errors: [],
    details: {}
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
      const { items = [], links = {} } = payload

      return {
        ...state,
        isPending: false,
        profile: { ...payload }
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
