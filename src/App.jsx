import { RouterProvider, createBrowserRouter, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products' 
import SingleProduct from './pages/products/SingleProduct' 
//import Checkout from './pages/checkout/Checkout';
import Error from './pages/Error'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import FAQs from './pages/FAQs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import './styles/variables/variables.scss'
import './styles/main/main.css'

const Layout = () => {
  return (
    <div className="page-center">
      <Navbar />
      <Outlet />
      <Footer /> 
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,    
    //errorElement: <Error />,
    children: [		//routes are relative  //shows up in Outlet
      {
        path: '/',
        element: <Home />,
      }, 
      {
        path: '/products',
        element: <Products />,
      },         
      {
        path: '/products/:id',
        element: <Products />,
      },
      {
        path: '/single-product/:id',	//
        element: <SingleProduct />,
      },
      { 
        path: '/about', 
        element: <About /> 
      },
      { 
        path: 'contact', 
        element: <Contact /> 
      }, 
      { 
        path: 'terms', 
        element: <Terms /> 
      }, 
      { 
        path: 'privacy', 
        element: <Privacy /> 
      }, 
      { 
        path: 'faqs', 
        element: <FAQs /> 
      },                               
    ],
  },
])

export default function App() {
 return (
  <div className="app">
    <RouterProvider router={router} />
  </div>
 )
}
