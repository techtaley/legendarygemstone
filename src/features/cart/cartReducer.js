import { createSlice } from '@reduxjs/toolkit'  //redux toolkit allows you to push directly and change object because of immer

const initialState = {
  products: [],     //object that includes title, desc, price
  // quantity: 0,
  // totalqty: 0,
  // totalprice: 0,
  // isLoading: false,   
}

export const cartSlice = createSlice({
  
  name: 'cart',
  initialState,
  reducers: {   //addItem, removeItem, clearCart
    addToCart: (state, action) => {  
      const existingProduct = state.products.find(item => item.id === action.payload.id);

      if(existingProduct) {
        //item.quantity = item.quantity.action.payload.quantity;  //full code
        existingProduct.quantity += action.payload.quantity;
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
    }  
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer