import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import './../navbar/navbar.css'
import axios from "axios";
import './../../styles/main/main.css';

import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../../features/cart/cartReducer';

import { Link } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';

import { makeRequest } from '../../makeRequest';

export default function Cart() {
  const products = useSelector(store => store.cart.products)   
  const dispatch = useDispatch();

  console.log(products)
  
  const totalAmt = () => {  //move to store as calculateTotal()
    let total = 0;

    products.forEach(item =>   //for each item in the cart
      //const price = item.regular_price ? item.regular_price : item.sale_price; 
      total += item.quantity * item.regular_price ? item.regular_price : item.sale_price
    )

    return total.toFixed(2);    
  } 

  const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL

  //const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHER_KEY);
  const stripePromise = loadStripe('pk_test_51OcIhCHK9coUp7hTlg2pfZ68Htb2S8Y5HpY1ih9vL9BvmBmfhbAmPwWXKIRzvHIe5peM0ULhPbDExCDH0d8Mm5JO00Dhqd9mtU');

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

  return (
    <div className="product-cart">
        <h3>Products in your cart</h3>

        {products?.map(product => 
            <div className="data" key={product.id}>

                <img src={IMAGE_URL + product.media[0]?.url} alt={product.title} />

                <div className="details">
                    <h3>{product.title}</h3>
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
            <span>${totalAmt()}</span>
        </div>

        <button className="btn" onClick={handlePayment}>Checkout</button>
        {/* <p className='center'><span className="bold">For Testing Only:</span>  On Checkout page enter credit card# as "4242 4242 4242 4242" </p> */}

        <span className="reset" onClick={() => dispatch(clearCart())}>Clear cart</span>
    </div>
  )
}
