import { createSlice } from '@reduxjs/toolkit'  //redux toolkit allows you to push directly and change object because of immer

const initialState = {
  products: [],     //object that includes title, desc, regular_price, sale_price
  quantity: 0,
  total: 0,
  isLoading: true,   
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {   //addItem, removeItem, clearCart
    addToCart: (state, action) => {  
      const existingProduct = state.products.find(item => item.id === action.payload.id);

      if(existingProduct) {
        //item.quantity = item.quantity.action.payload.quantity;  //full code
        existingProduct.quantity = action.payload.quantity;
      } else {
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;  //sends the id
      //state.products = state.products.filter(item => item.id !== action.payload); //full code
      state.products = state.products.filter(item => item.id !== itemId);
    }, 
    clearCart: (state) => {  
      state.products = []
      //need to reset all quantities back to 1
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;

      state.products.forEach(product => {
        quantity += product.quantity;
        total += product.quantity * (product.regular_price ? product.regular_price : product.sale_price);
        //total += product.quantity * product.regular_price 
      })

      state.quantity = quantity;
      state.total = total;
    }  
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, clearCart, calculateTotals } = cartSlice.actions

export default cartSlice.reducer