import React from 'react'
import Renderer from 'react-test-renderer'
import PropList from './'

test('can render a PropList', () => {
  const component = Renderer.create(<PropList />)

  expect(component.toJSON()).toMatchSnapshot()
})
