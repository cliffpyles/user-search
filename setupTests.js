import fetch from 'node-fetch'
import { escape } from 'querystring'
import 'jest-extended'

global.fetch = fetch
global.encodeURIComponent = escape
global.String = String
