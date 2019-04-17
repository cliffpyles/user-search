import path from 'path'
import fetch from 'node-fetch'
import { Polly } from '@pollyjs/core'
import { setupPolly } from 'setup-polly-jest'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'
import { escape } from 'querystring'
import 'jest-extended'

Polly.register(NodeHttpAdapter)
Polly.register(FSPersister)

setupPolly({
  adapters: ['node-http'],
  persister: 'fs',
  persisterOptions: {
    fs: {
      recordingsDir: path.resolve(__dirname, './__recordings__')
    }
  }
})

global.fetch = fetch
global.encodeURIComponent = escape
global.String = String
