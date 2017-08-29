import cart from './index.js';
describe('reducers', () => {
    describe('cart', () => {
        const initialState = {
            addedProducts: []
        }

        it('should handle ADD_TO_CART action', () => {
            expect(cart(initialState, { type: 'ADD_PRODUCT_TO_CART', productId: 1 })).toEqual({
                addedProducts: [1]
            })
        })
    })
})