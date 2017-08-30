export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const ADD_PRODUCT_TO_CART= 'ADD_PRODUCT_TO_CART';

export const toggleSideNav = ()=> ({
    type:TOGGLE_SIDENAV
})

export const getProducts = (products) => ({
    type:GET_PRODUCTS_LIST, 
    products:products
})

export const addToCart = (item) => ({
    type: ADD_PRODUCT_TO_CART,
    item
})