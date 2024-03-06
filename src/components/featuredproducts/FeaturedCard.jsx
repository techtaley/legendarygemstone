import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

import "./featured.css";

export default function FeaturedCard({ data, type }) {
  const { id, attributes } = data;
  // const [selectedItem, setSelectedItem] = useState(0);
  //const navigate = useNavigate();

  return (
    <>
      <Link className="featured-items-div" to={`/single-product/${id}`}>
        <article className="featured-article">
          <div className="feature-image-div">
            <div className="feature-image">
              <img
                className="first-img"
                // src={attributes.media[0]?.url}
                src={`./../assets/${attributes.media[0]?.image}`}
                alt={attributes.title}
                onClick={() => setSelectedItem(0)}
                //onClick={() => navigate(`/single-product/${attributes.id}`)}

              />
              {attributes.media[1]?.image ? (
                <img
                  className="second-img"
                  // src={attributes.media[1].url}
                  src={`./../assets/${attributes.media[1].image}`}
                  alt={attributes.media[1]?.image && data.title}
                  onClick={(e) => setSelectedItem(1)}
                  //onClick={() => navigate(`/single-product/${attributes.id}`)}
                />
              ) : null}
              {/* {attributes.isNew && <span>New Season </span>}    */}
            </div>
          </div>

          <div className="feature-desc">
            <p className="bold">
              <Link className="dark-link" to="">
                {attributes.title}
              </Link>
            </p>
          </div>
          {/* <p>{attributes.desc}</p> */}
        </article>
      </Link>
    </>
  );
}
