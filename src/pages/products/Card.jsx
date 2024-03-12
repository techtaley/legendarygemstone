import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../features/wishlist/wishlistReducer";

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton, 
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
  XIcon,  
} from "react-share";

  const IMAGE_URL = import.meta.env.VITE_UPLOAD_URL

export default function Card({ data }) {
  const navigate = useNavigate();
  const [isWishlist, setIsWishlist] = useState(false)
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.items); 
  const shareUrl = window.location.href;

  const handleToggle = wid => {
    setIsWishlist(!isWishlist);

    {isWishlist === false     
      ? dispatch(addWishlist(wid))
      : dispatch(removeWishlist(wid))
    }

    //map through all products, if product.id === favId  return products or null
    //setFavoriteProducts() 
  }

  //console.log(data.attributes.url.data[0].attributes.formats.medium.hash.url)
  //console.log(`https://lg-shop.techtaleyportfolio.com/${data.attributes.url.data[0].attributes.formats.medium.hash.url}`)
  //console.log(`https://lg-api.techtaleyportfolio.com/${data.attributes.url.data[0].attributes.formats.medium.url}`)

  return ( 
      <div className="product-list-div" key={data.id}>
          <img
            className="product-list-img"
            //src={`./../../../assets/${data.attributes.media[0]?.image}`}
            src={IMAGE_URL + data.attributes.media[0]?.url}
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

              <div className="price-details">

                {data.attributes.sale_price ? (
                  <p>
                    <span className="sale-price">
                      ${data.attributes.regular_price.toFixed(2)}
                    </span>

                    <span>
                      ${data.attributes.sale_price.toFixed(2)}
                    </span>
                  </p>
                  ) : (
                    <p>
                      <span>${data.attributes.regular_price.toFixed(2)}</span>
                    </p>
                  )}
              </div>

              <div className="social-details">
              <TwitterShareButton url={shareUrl}>
                <XIcon className="social-media-buttons" size={22} round={true} />
              </TwitterShareButton>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon className="social-media-buttons" size={22} round={true} />
              </FacebookShareButton>
              <PinterestShareButton url={shareUrl}>
                <PinterestIcon className="social-media-buttons" size={22} round={true} />
              </PinterestShareButton>

                {/* {isWishlist 
                ? <MdFavorite className="icon" onClick={() => dispatch(addWishlist(data.id)) && setIsWishlist(!isWishlist)} />  
                : <MdFavoriteBorder className="icon" onClick={() => dispatch(removeWishlist(data.id)) && setIsWishlist(!isWishlist)} />  
                } 
                */}
                {isWishlist 
                ? <MdFavorite className="icon" onClick={(e) => handleToggle(data.id)}/>  
                : <MdFavoriteBorder className="icon" onClick={(e) => handleToggle(data.id)}/>  
                }
              </div>

            </div>
          </p>
      </div>  
  );
}
