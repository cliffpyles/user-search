import getHypermediaLinks from './'

test('can parse hypermedia links into an object', () => {
  const hypermediaString =
    '<https://localhost/search?q=example&per_page=5&page=1>; rel="prev", <https://localhost/search?q=example&per_page=5&page=3>; rel="next", <https://localhost/search?q=example&per_page=5&page=200>; rel="last", <https://localhost/search?q=example&per_page=5&page=1>; rel="first"'
  const results = getHypermediaLinks(hypermediaString)

  expect(results).toEqual({
    prev: 'https://localhost/search?q=example&per_page=5&page=1',
    next: 'https://localhost/search?q=example&per_page=5&page=3',
    last: 'https://localhost/search?q=example&per_page=5&page=200',
    first: 'https://localhost/search?q=example&per_page=5&page=1'
  })
})
