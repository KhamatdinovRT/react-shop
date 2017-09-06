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

export const sideNav = (state = initialState.sideNav, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      return { sideNavIsOpen: !state.sideNavIsOpen }
    default:
      return state
  }
}

export const productsById = (state = initialState.productsById, action) => {
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
    const {id, size} = action.product
     let i = indexOfEntry(state.addedProducts, id, size)
      if (i===-1){
        return {
          addedProducts:[...state.addedProducts, action.product]
        }
      }
      else return {...state.cart,
        addedProducts:state.addedProducts.map((item)=>{
          return item.id==id ? {...item, qty:++item.qty}: item
        })}
    default:
      return state
  }
}

export default combineReducers({
  sideNav,
  productsById,
  cart,
})

const indexOfEntry = (array, id, size) => {
  if (array) {
    for (let i=0; i<array.length; i++) {
      let item = array[i];
      if (item.id === id && item.size === size)
        return i
  }
}
  return -1;
}

export const computeCartQty = addedProducts => {
  return addedProducts.reduce((count, product)=>{
    count += product.qty
    return count;
  }, 0)
}

export const getProduct = (products, productName) =>
  Object.keys(products).reduce((obj, key)=> {
      let item = products[key];
      if (item.handle===productName)
          obj = item
          return obj
  },{})

export const getTotal = state => {
  return state.cart.addedProducts.reduce((total, product)=> {
    let price = state.productsById[product.id].price
    total += product.qty * price
    return total
  }, 0).toFixed(2)
}

export const getCartProducts = state => {
  const {addedProducts} = state.cart
  return addedProducts.map((product, index)=>{
    return {
      ...state.productsById[product.id], ...product
    }
  })
}