import getQueryString from '../../helpers/get-query-string'
import fetchData from '../../helpers/fetch-data'

const SEARCH_USERS_ENDPOINT = 'https://api.github.com/search/users'
const USER_INFO_ENDPOINT = 'https://api.github.com/users'

export const searchUsers = ({
  query: q,
  sort,
  order,
  perPage: per_page,
  page
}) => {
  try {
    const queryParams = getQueryString({ q, sort, order, per_page, page })
    const searchEndpoint = `${SEARCH_USERS_ENDPOINT}${queryParams}`

    return fetchData(searchEndpoint)
  } catch (err) {
    return err
  }
}

export const loadPaginationLink = link => {
  try {
    return fetchData(link)
  } catch (err) {
    return err
  }
}

export const getUserInfo = username => {
  if (!username) {
    throw new Error('username not provided')
  }

  return fetchData(`${USER_INFO_ENDPOINT}/${username}`)
}
