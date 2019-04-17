import React from 'react'
import Renderer from 'react-test-renderer'
import Card from './'

test('can render a Card', () => {
  const component = Renderer.create(
    <Card>
      <p>Here goes the card!</p>
    </Card>
  )

  expect(component.toJSON()).toMatchSnapshot()
})
