import React from 'react'
import Renderer from 'react-test-renderer'
import Page from './'

test('can render a Page', () => {
  const component = Renderer.create(
    <Page>
      <p>A little content for the page.</p>
    </Page>
  )

  expect(component.toJSON()).toMatchSnapshot()
})

test('can render a Page with title', () => {
  const component = Renderer.create(
    <Page title="Example Page">
      <p>A little content for the page.</p>
    </Page>
  )

  expect(component.toJSON()).toMatchSnapshot()
})
