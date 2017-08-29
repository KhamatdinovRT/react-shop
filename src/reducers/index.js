import { combineReducers } from 'redux';

const initialState = {
  sideNav: { sideNavIsOpen: false },
  productsById: {},
  cart: { addedProducts: [] }
}

const sideNav = (state = initialState.sideNav, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDENAV':
      return { sideNavIsOpen: !state.sideNavIsOpen }
    default:
      return state
  }
}

const productsById = (state = initialState.productsById, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_LIST':
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      return state
  }
}

export const cart = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        ...action.item
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
