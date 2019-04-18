import { getUserInfo } from '../api'

// Action Types
export const GET_DETAILS_REQUESTED = 'GET_DETAILS_REQUESTED'
export const GET_DETAILS_SUCCEEDED = 'GET_DETAILS_SUCCEEDED'
export const GET_DETAILS_FAILED = 'GET_DETAILS_FAILED'

// Action Creators
export const handleGetDetailsRequest = () => {
  return {
    type: GET_DETAILS_REQUESTED
  }
}

export const handleGetDetailsSuccess = data => {
  return {
    type: GET_DETAILS_SUCCEEDED,
    payload: data
  }
}

export const handleGetDetailsFailure = err => {
  return {
    type: GET_DETAILS_FAILED,
    payload: err
  }
}

// Thunks
export const executeGetDetails = username => {
  return function(dispatch) {
    dispatch(handleGetDetailsRequest())

    return getUserInfo(username)
      .then(data => dispatch(handleGetDetailsSuccess(data)))
      .catch(err => dispatch(handleGetDetailsFailure(err)))
  }
}
