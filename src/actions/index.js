const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV'
const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST'
const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'

export const toggleSideNav = ()=> ({
    type:TOGGLE_SIDENAV
})

export const getProducts = (products) => ({
    type:GET_PRODUCTS_LIST, 
    products:products
})

// export const getProductById = (id) => ({
//     type:GET_PRODUCT_BY_ID,
//     id:id
// })
