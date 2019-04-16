import { searchUsers } from './'

test('can search for users', async () => {
  const results = await searchUsers({ query: 'ladyleet' })
  const user = results.items.filter(item => item.login === 'ladyleet')

  expect(results.total_count).toBeNumber()
  expect(results.items).toBeArray()
  expect(user.length).toEqual(1)
})
