const SEARCH_USERS_ENDPOINT = 'https://api.github.com/search/users'

export const searchUsers = ({ query: q, sort, order }) => {
  const queryParams = Object.entries({ q, sort, order })
    .reduce((accum, entry) => {
      const [queryParam, paramValue] = entry

      if (!paramValue) {
        return accum
      }

      return [...accum, `${queryParam}=${paramValue}`]
    }, [])
    .join('&')

  return fetch(`${SEARCH_USERS_ENDPOINT}?${queryParams}`)
    .then(res => res.json())
    .catch(err => err)
}
