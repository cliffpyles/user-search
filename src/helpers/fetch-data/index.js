import getHypermediaLinks from '../get-hypermedia-links'

let githubHeaders

if (process.env && process.env.USER_SEARCH_API_KEY) {
  githubHeaders = new Headers({
    Authorization: `token ${process.env.USER_SEARCH_API_KEY}`
  })
}

async function fetchExternalData(endpoint, abortSignal) {
  const externalResponse = await fetch(endpoint, {
    headers: githubHeaders,
    signal: abortSignal
  })
  const data = await externalResponse.json()
  const headers = await externalResponse.headers.get('Link')
  const links = getHypermediaLinks(headers)
  const response = {
    data,
    links
  }

  return response
}

function fetchLocalData(endpoint) {
  return localStorage.getItem(endpoint)
}

function fetchData(endpoint, abortSignal) {
  if (!localStorage) {
    return fetchExternalData(endpoint, abortSignal)
  }

  let existingRecord = fetchLocalData(endpoint)

  if (existingRecord) {
    existingRecord = JSON.parse(existingRecord)
    return Promise.resolve(existingRecord)
  } else {
    const response = fetchExternalData(endpoint, abortSignal)

    return response.then(data => {
      localStorage.setItem(endpoint, JSON.stringify(data))
      return data
    })
  }
}

export default fetchData
