import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import store from './store/store.js'
import{ persistor, store } from './store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </QueryClientProvider>
  </Provider>
)