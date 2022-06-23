// add product to cart list
export const addProductToCart = (product) => {
   return {
      type: 'ADD',
      payload: product
   }
}

// delete product from cart list
export const deleteProductFromCart = (product) => {
   return {
      type: 'DELETE',
      payload: product
   }
}

