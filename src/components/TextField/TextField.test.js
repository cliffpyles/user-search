import React from 'react'
import Renderer from 'react-test-renderer'
import TextField from './'

test('can render a TextField', () => {
  const component = Renderer.create(
    <TextField id="example" name="example" label="example" value="woohoo!" />
  )

  expect(component.toJSON()).toMatchSnapshot()
})
