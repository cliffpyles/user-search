import React from 'react'
import Renderer from 'react-test-renderer'
import MediaObject from './'

test('can render a MediaObject', () => {
  const component = Renderer.create(<MediaObject />)

  expect(component.toJSON()).toMatchSnapshot()
})
