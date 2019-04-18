import { searchUsers, getUserInfo } from './'

test('can search for users', () => {
  return searchUsers({ query: 'ladyleet' }).then(results => {
    const user = results.items.filter(item => item.login === 'ladyleet')

    expect(results.total_count).toBeNumber()
    expect(results.items).toBeArray()
    expect(user.length).toEqual(1)
  })
})

test('can search for users with paginated result', () => {
  return searchUsers({ query: 'Ben', perPage: 5, page: 2 }).then(results => {
    expect(results.items).toBeArray()
    expect(results.items.length).toEqual(5)
    expect(results.links.prev).toBeDefined()
    expect(results.links.next).toBeDefined()
    expect(results.links.last).toBeDefined()
    expect(results.links.first).toBeDefined()
  })
})

test('can get user info', () => {
  return getUserInfo('jayphelps').then(results => {
    expect(results).toMatchSnapshot()
  })
})
