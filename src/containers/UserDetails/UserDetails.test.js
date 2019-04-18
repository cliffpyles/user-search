import React from 'react'
import Renderer from 'react-test-renderer'
import initializeStore from '../../store'
import UserDetails from './'

test('can render user details', () => {
  const store = initializeStore({
    details: {
      login: 'nraboy'
    }
  })
  const result = Renderer.create(<UserDetails store={store} />)

  expect(result.toJSON()).toMatchSnapshot()
})
