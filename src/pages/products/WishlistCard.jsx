import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../features/wishlist/wishlistReducer";

export default function Card({ data }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist.items);  //get from updated initial state

  return (
    <div className="product-list-div" key={data.id}>
      <img
        className="product-list-img"
        src={wishlist.attributes.media[0]?.url}
        // src={`./../assets/${wishlist.attributes.media[0]?.image}`}
        alt={`${wishlist.attributes.title} photo`}
        onClick={() => navigate(`/single-product/${data.id}`)}
      />

      <p className="product-list-desc">
        <p
          className="product-desc"
          onClick={() => navigate(`/single-product/${data.id}`)}
        >
          {wishlist.attributes.title}
        </p>
        <div className="product-details">
          {wishlist.attributes.sale_price ? (
            <p>
              <span className="sale-price">
                ${wishlist.attributes.regular_price}
              </span>
              <span>${wishlist.attributes.sale_price}</span>
            </p>
          ) : (
            <p>
              <span>${wishlist.attributes.regular_price}</span>
            </p>
          )}

          {isFavorite ? (
            <MdFavorite
              className="icon"
              onClick={() =>
                dispatch(addFavorite(data.id)) && setIsFavorite(!isFavorite)
              }
            />
          ) : (
            <MdFavoriteBorder
              className="icon"
              onClick={() =>
                dispatch(removeFavorite(data.id)) && setIsFavorite(!isFavorite)
              }
            />
          )}
        </div>
      </p>
    </div>
  );
}
