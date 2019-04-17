import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const App = ({ store }) => {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWithStore
