import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import initializeStore from './store'
import UserList from './containers/UserList'
import './App.css'

const store = initializeStore()

const App = ({ store }) => {
  return (
    <div>
      <h1>App</h1>
      <Router>
        <UserList path="/" />
      </Router>
    </div>
  )
}

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWithStore
