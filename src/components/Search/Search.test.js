import React from 'react'
import Renderer from 'react-test-renderer'
import Search from './'

test('can render a Search', () => {
  const component = Renderer.create(
    <Search
      id="example"
      name="example"
      label="example"
      onChange={() => {
        console.log('changing')
      }}
      onSearch={() => {
        console.log('searching')
      }}
      value="search for something"
    />
  )

  expect(component.toJSON()).toMatchSnapshot()
})
