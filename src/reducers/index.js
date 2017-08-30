import { combineReducers } from 'redux';
import {
  TOGGLE_SIDENAV, 
  GET_PRODUCTS_LIST, 
  ADD_PRODUCT_TO_CART
} from '../actions';

const initialState = {
  sideNav: { sideNavIsOpen: false },
  productsById: {},
  cart: { addedProducts: [] }
}

const sideNav = (state = initialState.sideNav, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return { sideNavIsOpen: !state.sideNavIsOpen }
    default:
      return state
  }
}

const productsById = (state = initialState.productsById, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return (
        action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      )
    default:
      return state
  }
}

export const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
    debugger
    const {productId, size} = action.item
     let i = indexOfEntry(state.addedProducts, productId, size)
      if (i===-1){
        return {
          ...state.cart,
          addedProducts:[...state.addedProducts, action.item]
        }
      }
      else return {
        ...state.cart
      }
    default:
      return state
  }
}


export default combineReducers({
  sideNav,
  productsById,
  cart
})

const indexOfEntry = (array, id, size) => {
  if (array) {
    for (let i=0; i<array.length; i++) {
    let item = array[i];
    if (item.productId === id && item.size === size)
      return i
  }
}
  return -1;
} 