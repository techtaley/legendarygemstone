import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import './../navbar/navbar.css'
import axios from "axios";
import './../../styles/main/main.css';

import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart, calculateTotals } from '../../features/cart/cartReducer';

import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';

import { makeRequest } from '../../makeRequest';

export default function Cart() {
  //const products = useSelector(store => store.cart.products)   
  const { products, total } = useSelector(store => store.cart) 
  const dispatch = useDispatch();

  console.log(total)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [products])

  const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHER_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post(`/orders`, {         
        products,          
      })

        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        })

    } catch(error){
      console.log(error)
    }
  }  

  return (//calculate total and quantity for each product THEN total using calculateTotals()
    <div className="product-cart">
        <h3>Products in your cart</h3>

        {products?.map(product => //use state to calculate total for each product
            <div className="data" key={product.id}>
                <img src={IMAGE_URL + product.media[0]?.url} alt={product.title} />
                <div className="details">
                    <p className="title">{product.title}</p>
                      {/* <p className="desc">{product.desc.substring(0, 80)}</p> */}
                      {product.sale_price                    
                        ? <p className="price">{product.quantity} x ${product.sale_price.toFixed(2)}</p> 
                        : <p className="price">{product.quantity} x ${product.regular_price.toFixed(2)}</p> 
                      }
                </div>
                <MdDelete className="delete-icon" onClick={() => dispatch(removeItem(product.id))}/>
            </div>    
        )}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>${total}</span>
        </div>

        <button className="btn" onClick={handlePayment}>Checkout</button>
        {/* <p className='center'><span className="bold">For Testing Only:</span>  On Checkout page enter credit card# as "4242 4242 4242 4242" </p> */}

        <span className="reset" onClick={() => dispatch(clearCart())}>Clear cart</span>
    </div>
  )
}
