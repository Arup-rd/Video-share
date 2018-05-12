import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './Routes'
import configureStore from './Store/Store'
import { startLogin, LogoutUser } from './Actions/auth'
import './Styles/style.scss'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

if (localStorage.getItem('auth')) {
  store.dispatch(startLogin({token: localStorage.getItem('auth')}))
} else {
  store.dispatch(LogoutUser())    
}
