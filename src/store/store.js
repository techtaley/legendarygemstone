import cartReducer from '../features/cart/cartReducer'
import favoriteReducer from '../features/favorite/favoriteReducer'

//import { configureStore } from '@reduxjs/toolkit'
// export default configureStore({
//   reducer: {cart: cartReducer},
// })

//REPLACED configureSture configurations with the below for REDUX-PERSIST
import { configureStore } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import { PersistGate } from 'redux-persist/integration/react'  //move to main.js

// import App from './App'
// import rootReducer from './reducers'

// @ts-ignore
//const stripe = require('stripe')('sk_test_51OcIhCHK9coUp7hTGVbYvCgGWh7qYJsrGy4JNZwrVY7rZJG2XyDE61WkhWKg9JS4X1exWW1WcSpor0O9otmwnGip005jlBDiNA');

// const stripe = require('stripe')(import.meta.env.VITE_STRIPE_KEY);

import Stripe from 'stripe';
const stripe = new Stripe(import.meta.env.VITE_STRIPE_KEY);

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

//const persistedReducer = persistReducer(persistConfig, rootReducer) //update with cartReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer)
const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer)


export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    Favorite: persistedFavoriteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

