import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Router } from '@reach/router'
import initializeStore from './store'
import UserList from './containers/UserList'
import UserDetails from './containers/UserDetails'
import './App.css'

const store = initializeStore()

const App = ({ store }) => {
  return (
    <div>
      <Router>
        <Redirect from="/" to="/users" />
        <UserList path="/users" />
        <UserDetails path="/users/:username" />
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
