import { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from './actions'
// Reducer
function reducer(state, action) {
  switch (action.type) {
    /* ********************************** CLEAR ********************************* */
    case CLEAR_CART:
      return { ...state, cart: [] }
    /* ********************************* REMOVE ********************************* */
    case REMOVE:
      const updatedState = state.cart.filter((cart) => {
        return cart.id !== action.payload.id
      })
      return { ...state, cart: updatedState }
    /* ********************************** TOTAL ********************************* */
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount

          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      return { ...state, total, amount }
    /* ********************************* toggle ********************************* */
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === 'inc') {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
            }
            if (action.payload.toggle === 'dec') {
              return (cartItem = { cartItem, amount: cartItem.amount - 1 })
            }
          }
          return cartItem
        }),
      }
    default:
      return state
  }
}

export default reducer
