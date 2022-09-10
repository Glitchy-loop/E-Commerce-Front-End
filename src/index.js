import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './global.css'
import Router from './Router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const root = ReactDOM.createRoot(document.getElementById('root'))
const PUBLIC_KEY =
  'pk_test_51LfR10JxYG00co5c7212z1zhVturg1Wd3d7edj88axaGwVkzyYZhVGN4QqXCF1g8j4SCNMNmglN2e3e6Hoxo1erE00HViiz6IF'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

root.render(
  <React.StrictMode>
    <Elements stripe={stripeTestPromise}>
      <Provider store={store}>
        <Router />
      </Provider>
    </Elements>
  </React.StrictMode>
)
