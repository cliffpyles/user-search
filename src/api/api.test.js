import { searchUsers, getUserInfo } from './'

test('can search for users', async () => {
  const results = await searchUsers({ query: 'ladyleet' })
  const user = results.items.filter(item => item.login === 'ladyleet')

  expect(results.total_count).toBeNumber()
  expect(results.items).toBeArray()
  expect(user.length).toEqual(1)
})

test('can search for users with paginated result', async () => {
  const results = await searchUsers({ query: 'Ben', perPage: 5, page: 2 })

  expect(results.items).toBeArray()
  expect(results.items.length).toEqual(5)
  expect(results.links.prev).toBeDefined()
  expect(results.links.next).toBeDefined()
  expect(results.links.last).toBeDefined()
  expect(results.links.first).toBeDefined()
})

test('can get user info', async () => {
  const results = await getUserInfo('jayphelps')

  expect(results).toMatchSnapshot()
})
