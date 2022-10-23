/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// packages
import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items
import cartItems from './cart-items'
// redux stuff
import { createStore } from 'redux'
// actions VARIABLES
import { DECREASE, INCREASE } from './actions'
// reducer
import reducer from './reducer'
// Provider
import { Provider } from 'react-redux'

/* ********************************** Redux ********************************* */
// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 3,
}
// Our store:
const store = createStore(reducer, initialStore)
// dispatch methods  :

// log the state :
console.log(store.getState())
/* -------------------------------------------------------------------------- */
/*                                APP component                               */
/* -------------------------------------------------------------------------- */
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
