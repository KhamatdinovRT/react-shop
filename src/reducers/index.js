import { combineReducers } from 'redux';

const initialState = {
  sideNavIsOpen:false
}

const sideNav = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDENAV':
      return {sideNavIsOpen:!state.sideNavIsOpen}
    default:
      return state
  }
}

const products = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_LIST':
      return action.products
    default:
      return state
  }
}

export default combineReducers ({
  sideNav,
  products
})
  