import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'

import App from './App'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <CssBaseline />
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
