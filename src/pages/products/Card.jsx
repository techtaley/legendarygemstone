import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../features/favorite/favoriteReducer";

export default function Card({ data }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.items);  

  const handleToggle = () => {
    setIsFavorite(!isFavorite);

    dispatch(addFavorite)

    //map through all products, if product.id === favId  return products or null
    //setFavoriteProducts() 
  }

  return ( 
      <div className="product-list-div" key={data.id}>
          <img
            className="product-list-img"
            //src={data.attributes.media[0]?.url}
            //src={`https://lg-api.techtaleyportfolio.com/uploads/${data.attributes.media[0]?.url}`}
            
            src={`./../../../assets/${data.attributes.media[0]?.image}`}
            alt={`${data.attributes.title} photo`}
            onClick={() => navigate(`/single-product/${data.id}`)}
          />

          <p className="product-list-desc">
            <p
              className="product-desc"
              onClick={() => navigate(`/single-product/${data.id}`)}
            >
              {data.attributes.title}
            </p>
            <div className="product-details">
              {data.attributes.sale_price ? (
                <p>
                  <span className="sale-price">
                    ${data.attributes.regular_price}
                  </span>
                  <span>${data.attributes.sale_price}</span>
                </p>
              ) : (
                <p>
                  <span>${data.attributes.regular_price}</span>
                </p>
              )}

              {/* {isFavorite 
              ? <MdFavorite className="icon" onClick={() => dispatch(addFavorite(data.id)) && setIsFavorite(!isFavorite)} />  
              : <MdFavoriteBorder className="icon" onClick={() => dispatch(removeFavorite(data.id)) && setIsFavorite(!isFavorite)} />  
              } */}
            </div>
          </p>
      </div>  
  );
}
