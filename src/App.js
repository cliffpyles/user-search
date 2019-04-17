import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import store from './store'
import UserList from './containers/UserList'
import './App.css'

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
