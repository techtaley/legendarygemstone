import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaBalanceScale } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { addToCart, removeItem } from "../../features/cart/cartReducer";
import { useDispatch } from "react-redux";

import './products.css';

export default function SingleProduct() {
  const id = useParams().id  //gets the id of the page that was selected
  const [selectedId, setSelectedId] = useState(0);
  const [quantity, setQuantity] = useState(1);  //move to store

  const [apiData, setApiData] = useState();  //id, attributes
  const [loading, setLoading] = useState(false);
  const [pageAttributes, setPageAttributes] = useState();  //media, pric, title 

  const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL
  const BASEURL = import.meta.env.VITE_PRODUCTION_API_URL;
  //const BASEURL = import.meta.env.VITE_DEVELOPMENT_API_URL ||  import.meta.env.VITE_PRODUCTION_API_URL

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASEURL + `/products/${id}?populate=*`, {  //
          header: {
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          },
        });

        const results = await res.data.data;
        setApiData(results);
        setPageAttributes(results.attributes);

        //console.log(pageAttributes)

        setLoading(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  return (
    <>
      {loading && (
        <section className="responsive single-product section">
          <div className="left-side">

            <div className="main-image">              
              <img 
                // src={pageAttributes.media[selectedId].image}
                //src={`./../assets/${pageAttributes.media[selectedId].image}` }
                src={IMAGE_URL + pageAttributes.media[selectedId]?.url}
                alt=""                
              />              
            </div>

            <div className="thumbnail">
                {pageAttributes.media[0] &&
                  <img
                    className="thumbnail-image"
                    src={IMAGE_URL + pageAttributes.media[0]?.url}
                    //src={`./../assets/${pageAttributes.media[0]?.image}`}
                    alt=""
                    onClick={() => setSelectedId(0)}
                  />  
                }              
                {pageAttributes.media[1] &&
                  <img
                    className="thumbnail-image"
                    src={IMAGE_URL + pageAttributes.media[1]?.url}                  
                    //src={`./../assets/${pageAttributes.media[1]?.image}`}
                    // src={pageAttributes.media[1]?.image}
                    alt=""
                    onClick={() => setSelectedId(1)}
                  />                
                }                                       
                </div>
          </div>

          <div className="right-side">
            <div className="product-desc">
              <h1>{pageAttributes.title}</h1>


              {pageAttributes.sale_price 
              ? 
                <p>
                  <span className="sale-price">${pageAttributes.regular_price}</span>
                  <span>${pageAttributes.sale_price}</span>               
                </p>
              : 
                <p>
                  <span>${pageAttributes.regular_price}</span>
                </p>
              }

              <p>{pageAttributes.desc}</p>

              <div className="quantity">
                <button
                  className="btn quantity-btn"
                  onClick={() =>
                    setQuantity((qty) => (qty === 1 ? 0 : qty - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button
                  className="btn quantity-btn"
                  onClick={() =>
                    setQuantity((qty) => (qty === 4 ? 5 : qty + 1))
                  }
                >
                  +
                </button>
              </div>

              <button className="btn product-add-btn" 
                onClick={() => dispatch(addToCart({  //1. get new item from CMS
                id: apiData.id,
                title: pageAttributes.title,
                desc: pageAttributes.desc,
                regular_price: pageAttributes.regular_price,
                sale_price: pageAttributes.sale_price, 
                media: pageAttributes.media,
                quantity, //in the store and front end 
              }))}>
                {/* <FaCartArrowDown className="icon" /> */}
                <span>ADD / UPDATE</span>
              </button>

              <div className="product-like-links">
                <div className="link">
                  <MdFavoriteBorder className="icon" />
                  <span>ADD TO WISH LIST</span>
                </div>

                <div className="link">
                  <FaBalanceScale className="icon" />
                  <span>ADD TO COMPARE</span>
                </div>
              </div>

              {/* <div className="other-info">
                <h2>Product Info</h2>
                  {pageAttributes.ProductInfo.map(info => 
                    <div className="other">
                      <p className="bold">{info.title}</p>
                      <span>{info.desc}</span>
                      <hr />                
                    </div>                    
                  )}

              </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
