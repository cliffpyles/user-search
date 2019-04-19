import { searchUsers, loadPaginationLink } from '../api'

// Action Types
export const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED'
export const SEARCH_REQUESTED = 'SEARCH_REQUESTED'
export const SEARCH_SUCCEEDED = 'SEARCH_SUCCEEDED'
export const SEARCH_FAILED = 'SEARCH_FAILED'

// Action Creators
export const handleSearchInputChange = value => {
  return {
    type: SEARCH_INPUT_CHANGED,
    payload: value
  }
}

export const handleSearchRequest = () => {
  return {
    type: SEARCH_REQUESTED
  }
}

export const handleSearchSuccess = data => {
  return {
    type: SEARCH_SUCCEEDED,
    payload: data
  }
}

export const handleSearchFailure = err => {
  return {
    type: SEARCH_FAILED,
    payload: err
  }
}

// Thunks
export const executeSearch = value => {
  return function(dispatch) {
    dispatch(handleSearchRequest())

    return searchUsers({ query: value })
      .then(data => dispatch(handleSearchSuccess(data)))
      .catch(err => dispatch(handleSearchFailure(err)))
  }
}

export const executePageChange = link => {
  return function(dispatch) {
    dispatch(handleSearchRequest())

    return loadPaginationLink(link)
      .then(data => dispatch(handleSearchSuccess(data)))
      .catch(err => dispatch(handleSearchFailure(err)))
  }
}
