// @flow

import React from 'react'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import configureStore from './store/configureStore'
import createReducer from './reducers'

const Loading = () => <div>Loading...</div>

// Use react-reloadable for code split
const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
})

const reducer = createReducer()
const store = configureStore({ reducer })

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
