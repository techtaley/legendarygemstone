import { createSlice } from '@reduxjs/toolkit'  //redux toolkit allows you to push directly and change object because of immer

const initialState = {
    items: [],
}

export const wishlistSlice = createSlice({  
  name: 'wishlist',
  initialState,
  reducers: {   
   addWishlist(state, action){  //does the wishlist already exist in wishlists 
      const existing = state.items.find(product => product.id === action.payload.id) 

      if(!existing) {  //if doesn't exists, add the wishlist product
        state.items.push(action.payload)
      }
    },
    removeWishlist(state, action){  //removes the unclicked wishlist product
      state.items = state.items.filter(item => item.id !== action.payload)  //data.id passed
    }    
  }  
})

// Action creators are generated for each case reducer function
export const { addWishlist, removeWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer