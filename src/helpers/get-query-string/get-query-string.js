function getQueryString(fields) {
  const queryString = Object.entries(fields)
    .reduce((accum, entry) => {
      const [queryParam, paramValue] = entry

      if (!paramValue) {
        return accum
      }

      const encodedQueryParam = encodeURIComponent(queryParam)
      const encodedParamValue = encodeURIComponent(paramValue)

      return [...accum, `${encodedQueryParam}=${encodedParamValue}`]
    }, [])
    .join('&')
  return `?${queryString}`
}

export default getQueryString
