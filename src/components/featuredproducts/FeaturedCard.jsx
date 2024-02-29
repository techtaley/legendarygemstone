import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './featured.css'

export default function FeaturedCard({data, type}) {
  const {id, attributes} = data;

  return (
    <>
    <Link className="featured-items-div" to={`/products/${id}`} >
          <article className="featured-article">
            <div className="feature-image">  
              <img className="first-img" src={attributes.media[0].image} alt={attributes.title} onClick={e => setSelectedItem(0)} />
              <img className="second-img" src={attributes.media[1]?.image} alt={attributes.media[1]?.image && data.title } onClick={e => setSelectedItem(1)} />
              {/* {attributes.isNew && <span>New Season </span>}    */}
            </div>

            <div className="feature-desc">
              <p className="bold">
                <Link className="dark-link" to="">{attributes.title}</Link>
              </p>
            </div>
            {/* <p>{attributes.desc}</p> */}
          </article>
          </Link>
          
    </>
  )
 }