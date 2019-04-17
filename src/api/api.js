import getQueryString from '../helpers/get-query-string'
import getHypermediaLinks from '../helpers/get-hypermedia-links'

const SEARCH_USERS_ENDPOINT = 'https://api.github.com/search/users'
const USER_INFO_ENDPOINT = 'https://api.github.com/users'

export const searchUsers = async ({
  query: q,
  sort,
  order,
  perPage: per_page,
  page
}) => {
  try {
    const queryParams = getQueryString({ q, sort, order, per_page, page })
    const response = await fetch(`${SEARCH_USERS_ENDPOINT}${queryParams}`)
    const data = await response.json()
    const headers = await response.headers.get('Link')
    const links = getHypermediaLinks(headers)

    return {
      ...data,
      links
    }
  } catch (err) {
    throw err
  }
}

export const getUserInfo = async username => {
  if (!username) {
    throw new Error('username not provided')
  }

  return fetch(`${USER_INFO_ENDPOINT}/${username}`)
    .then(res => res.json())
    .catch(err => err)
}
