import React from "react";
import "./categories.css";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
Grid Template - based on columns

1. create the columns needed div.col across the page
2. within div.col create number of rows in each div.col
*/

export default function Categories() {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);

  const BASEURL = import.meta.env.VITE_PRODUCTION_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const res = await axios.get(BASEURL + `/sub-categories?populate=*`, {
        const res = await axios.get(BASEURL + `/categories?populate=*`, {
            header: {
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          },
        });

        const results = await res.data.data;
        setApiData(results);

        //console.log(apiData[3].attributes.media[0]?.image)

        setLoading(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  // return (
  //   <h1>Categories coming...</h1>
  // )

  return (
    <>
      {loading && (
        <section>
          {/* <div className="category-div">
            <h1>A few of your favorites</h1>  
          </div> */}

          <div className="responsive categories">
            <div className="grid grid-col">
              <div className="grid grid-row">
                <img
                  className="category-img"
                  src={`./../assets/${apiData[3].attributes.media[0]?.image}`}   //rings
                />
                <button className="btn light-bt category-btn"> 
                  <Link to="products/4">
                    {apiData[3].attributes.title} 
                  </Link>                 
                </button>
              </div>

              <div className="grid grid-row">
                <img
                  className="category-img"
                  src={`./../assets/${apiData[5].attributes.media[0]?.image}`}   //sale      
                />
                <button className="btn light-bt category-btn">
                <Link to="products/6">
                    {apiData[5].attributes.title}
                  </Link>                 
                </button>
              </div>
            </div>

            <div className="grid grid-col-lg">
              <div className="grid grid-row">
                <img
                  className="category-img"
                  src={`./../assets/${apiData[4].attributes.media[0]?.image}`} //knotted        
                />
                <button className="btn light-bt category-btn">
                <Link to="products/5">
                    {apiData[4].attributes.title}
                  </Link>                 
                </button>
              </div>
            </div>

            <div className="grid grid-col-lg">
              <div className="grid grid-row">
                <div className="grid grid-col">
                  <img
                    className="category-img"
                    src={`./../assets/${apiData[2].attributes.media[0]?.image}`}  // earrings       
                  />
                  <button className="btn light-bt category-btn">      
                  <Link to="products/3">
                    {apiData[2].attributes.title}
                  </Link> 
                  </button>
                </div>

                <div className="grid grid-col">
                  <div className="grid grid-row">
                    <img 
                      src={`./../assets/${apiData[6].attributes.media[0]?.image}`}  //  4/0  products/1 dresses -> summer        
                    />
                    <button className="btn light-bt category-btn"> 
                    <Link to="products/7">
                    {apiData[6].attributes.title}
                  </Link> 
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-row">
                <div className="grid grid-col-lg">
                  <img 
                      src={`./../assets/${apiData[7].attributes.media[0]?.image}`}  // 5/0  products/1  accessories -> business         
                  />
                  <button className="btn light-bt category-btn">         
                  <Link to="products/12">
                    {apiData[7].attributes.title}
                  </Link> 
                  </button>
                </div>
              </div>              
            </div>
          </div> 
        </section>
      )}
    </>
  );
}
