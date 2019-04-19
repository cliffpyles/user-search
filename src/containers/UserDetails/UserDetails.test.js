import React from 'react'
import initializeStore from '../../store'
import UserDetails from './'

test('can render user details', () => {
  const store = initializeStore({
    details: {
      profile: { login: 'nraboy' }
    }
  })
  const result = render(<UserDetails store={store} />)

  expect(result).toMatchSnapshot()
})
