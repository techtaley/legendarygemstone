import { createSlice } from '@reduxjs/toolkit'  //redux toolkit allows you to push directly and change object because of immer

const initialState = {
    items: [],
}

export const favoriteSlice = createSlice({  
  name: 'favorite',
  initialState,
  reducers: {   
   addFavorite(state, action){  //does the favorite already exist in favorites 
      const existing = state.items.find(product => product.id === action.payload.id) 

      if(!existing) {  //if doesn't exists, add the favorite product
        state.items.push(action.payload)
      }
    },
    removeFavorite(state, action){  //removes the unclicked favorite product
      state.items = state.items.filter(item => item.id !== action.payload)  //data.id passed
    }    
  }  
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer