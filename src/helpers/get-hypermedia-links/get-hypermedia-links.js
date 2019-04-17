import matchAll from 'string.prototype.matchall'

matchAll.shim()

function getHypermediaLinks(links) {
  if (!links) {
    return {}
  }

  const hypermediaRegEx = /<(.+?)>; ?rel="(\w+?)"/g
  const matches = [...links.matchAll(hypermediaRegEx)]

  return matches.reduce((accum, match) => {
    const [raw, url, key] = match

    return {
      ...accum,
      [key]: url
    }
  }, {})
}

export default getHypermediaLinks
