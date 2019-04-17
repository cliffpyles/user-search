import React from 'react'
import Renderer from 'react-test-renderer'
import UserList from './'

test('can render a list of users', () => {
  const users = [
    { id: '1', login: 'seanlarkin' },
    { id: '2', login: 'mikebrocchi' },
    { id: '3', login: 'alexkureev' },
    { id: '4', login: 'balenterdi' },
    { id: '5', login: 'jameslong' }
  ]
  const result = Renderer.create(<UserList users={users} />)

  expect(result.toJSON()).toMatchSnapshot()
})
