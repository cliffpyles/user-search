import getQueryString from './'

test('can parse object into a query param string', () => {
  const result = getQueryString({
    query: 'apples and oranges',
    limit: '3',
    offset: null
  })

  expect(result).toEqual('?query=apples%20and%20oranges&limit=3')
})
