//import { useState, useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import SearchList from "../../components/search/SearchList";

import "./products.css";

import { PiMagnifyingGlassBold } from "react-icons/pi";

import axios from "axios";
import { Link, useParams } from "react-router-dom"; 
import useFetch from './../../hooks/useFetch'

export default function Products({type}) {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCatIds, setSelectedSubCatIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState([])
  const [targetValue, setTargetValue] = useState("")

  //1. populates sidebar only with the subcategories using id
  //const { apiData, loading, error} = useFetch(`/sub-categories?filters[categories][id][$eq]=${catId}`)  
  const { apiData, loading, error} = useFetch(`/sub-categories?filters[categories][id][$eq]=${catId}`)  

//get value of sidebar element checkbox, radio, button  
 const handleChange = e => {
  const value = e.target.value;                              //value is cat.id
  const isChecked = e.target.checked;     

    setSelectedSubCatIds(                      
        isChecked                                             //if checked, display product subcategories
      ? [...selectedSubCatIds, value]                         //display catId and subcategory products for the selected category
      : [selectedSubCatIds.filter((cat) => cat !== value)]    //if not checked display products from main categories
    )

     setSearchQuery(value)
     setTargetValue(value)
    
    console.log(searchQuery)
    console.log(value)

    //console.log(apiData)

  }  

  return (
    <>
        <section className="section products responsive">
          <div className="left-side">
            <div className="search-div">
                <input type="text" className="search-input"  placeholder="Search for a product" onChange={handleChange}/>
                {/* <PiMagnifyingGlassBold className="icon" /> */}
            </div>

            <div className="filterItem">
              <h2>Product Categories</h2> 

              {apiData?.map(cat =>              
                <div className="inputItem" key={cat.id}>
                  <input type="checkbox" id={cat.id} value={cat.id} key={cat.id} onChange={handleChange}/>
                  <label htmlFor={cat.id}>{cat.attributes.title}</label>
                </div>
               )}
            </div>

            <div className="filterItem">
              <h2>Filter by Price</h2>

              <div className="inputItem">
                <span>0</span>
                <input type="range" min={0} max={1000} onChange={e => setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
              </div>
            </div>

            <div className="filterItem">
              <h2>Sort by Price</h2>
              <div className="inputItem">
                <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")}/>
                <label htmlFor="asc">Price (Low to High)</label>
              </div>

              <div className="inputItem">
                <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")}/>
                <label htmlFor="desc">Price (High to Low)</label>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="right-img marginbtm30">
                  <img
                    className="product-img"
                    src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    // src={bannerImg[0].media[0].image}
                    alt=""
                  />
            </div>

            <section className="product-list section">              
              <ProductList catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCatIds} />
              {targetValue !== "" &&               
              <SearchList catId={catId} query={searchQuery} maxPrice={maxPrice} sort={sort} subCats={selectedSubCatIds} />
              }
            </section>                          
          </div>
        </section>
    </>
  );
}