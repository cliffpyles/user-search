import React from 'react'
import Renderer from 'react-test-renderer'
import Button from './'

test('can render a Button', () => {
  const component = Renderer.create(
    <Button
      type="submit"
      onClick={() => {
        console.log('clicked')
      }}
    />
  )

  expect(component.toJSON()).toMatchSnapshot()
})
