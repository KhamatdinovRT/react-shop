import {cart, sideNav, productsById} from './index.js';

describe('reducers', () => {
    describe('cart', () => {
        const product = {id: 1, size:1, qty:1}
        it('should add to cart', () => {
            expect(cart(undefined, {type:'ADD_PRODUCT_TO_CART', product})).toEqual({
                addedProducts:[product]
            })
        })

        it('should increment qty when product is already in cart', () => {
            const state = {addedProducts:[product]}
            const expected = [{...product, qty:2}]
            expect(cart(state, {type:'ADD_PRODUCT_TO_CART', product})).toEqual({
                addedProducts: expected
            })
        })
    })

    describe ('sidenav', ()=>{
        it('should toggle sidenav', () =>{
            expect(sideNav(undefined, {type: 'TOGGLE_SIDENAV'})).toEqual({
                sideNavIsOpen:true
            })
        })
    })

    describe('productsById', ()=>{
        let products = [{id:1}];
        it('should return products by id', ()=>{
            expect(productsById(undefined, {type:'GET_PRODUCTS_LIST', products})).toEqual({
                "1":{id:1}
            })
        })
    })
})