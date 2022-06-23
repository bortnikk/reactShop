const cart = []

const handleCart = (state = cart, action) => {
   const product = action.payload
   switch (action.type) {
      case 'ADD':
         const existingProduct = state.find((x) => x.id === product.id)
         if (existingProduct) {
            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
         } else {
            const product = action.payload
            return [
               ...state, {
                  ...product, qty: 1
               }
            ]
         }
         break;
      
      case 'DELETE':
         const deleteExistingProduct = state.find((x) => x.id === product.id)
         if (deleteExistingProduct.qty === 1) {
            return state.filter((x) => x.id !== deleteExistingProduct.id)
         } else {
            return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
         }
         break;
      
      default: return state
         break;
   }
}