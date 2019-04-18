import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEEDED,
  GET_DETAILS_FAILED
} from '../actions'

const detailsReducer = (
  state = {
    isPending: false,
    errors: [],
    avatar_url: '',
    bio: null,
    blog: '',
    company: '',
    created_at: '',
    email: null,
    events_url: '',
    followers_url: '',
    followers: null,
    following_url: '',
    following: null,
    gists_url: '',
    gravatar_id: '',
    hireable: null,
    html_url: '',
    id: null,
    location: null,
    login: '',
    name: '',
    node_id: '',
    organizations_url: '',
    public_gists: null,
    public_repos: null,
    received_events_url: '',
    repos_url: '',
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    type: '',
    updated_at: '',
    url: ''
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
        ...payload
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
