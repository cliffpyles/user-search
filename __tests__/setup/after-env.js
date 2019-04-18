import path from 'path'
import fetch from 'node-fetch'
import { Polly } from '@pollyjs/core'
import { setupPolly } from 'setup-polly-jest'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'
import { escape } from 'querystring'
import { render as rtlRender, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import 'jest-extended'

Polly.register(NodeHttpAdapter)
Polly.register(FSPersister)

setupPolly({
  adapters: ['node-http'],
  persister: 'fs',
  persisterOptions: {
    fs: {
      recordingsDir: path.resolve(__dirname, '../recordings')
    }
  }
})

function render(component) {
  const { container, getByText } = rtlRender(component)

  container.click = () => {
    fireEvent.click(container)
  }

  container.clickText = text => {
    fireEvent.click(getByText(text))
  }

  return container
}

global.fetch = fetch
global.encodeURIComponent = escape
global.String = String
global.render = render
