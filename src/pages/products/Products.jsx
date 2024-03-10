import React from "react";
//import { useState, useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import SearchList from "../../components/search/SearchList";

import "./products.css";

import { PiMagnifyingGlassBold } from "react-icons/pi";

import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
// import FavoriteList from './FavoriteList';

export default function Products({ type }) {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCatIds, setSelectedSubCatIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [targetValue, setTargetValue] = useState("");

  //1. populates sidebar only with the subcategories using id - fetch all subcategories (stones) then filter by categories (sets, necklace,...)
  const { apiData, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );

  const navigate = useNavigate();

  //get checked status and value of sidebar element checkbox, radio, button
  const handleChange = (e) => {
    const value = e.target.value; //value is the cat.id
    const isChecked = e.target.checked;  //if true

    setSelectedSubCatIds(
      isChecked //if checked, add cat.id to the list & display subcategories (on right)
        ? [...selectedSubCatIds, value] //get all catIds and subcategory products for the selected category
        : [selectedSubCatIds.filter((cat) => cat !== value)] //if not checked, remove cat.id from list but display other subcategories
    );

    setSearchQuery(value);
    setTargetValue(value);
    //value ?  setTargetValue(value) : setTargetValue("");

    console.log(searchQuery);
    console.log(value);
  };

  return (
    <>
      <section className="section products responsive">
        <div className="left-side">
          <div className="filterItem">
            <h2>Filter Gemstone</h2>

            {apiData?.map((cat) => (
              <div className="inputItem" key={cat.id}>
                <input
                  type="checkbox"
                  id={cat.id}
                  value={cat.id}
                  key={cat.id}
                  onChange={handleChange}
                />
                <label htmlFor={cat.id}>{cat.attributes.title}</label>
              </div>
            ))}
          </div>

          <div className="filterItem">
            <h2>Filter by Price</h2>

            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>

          <div className="filterItem">
            <h2>Sort by Price</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price (Low to High)</label>
            </div>

            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price (High to Low)</label>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="statement center">
            <h3 className="cursive-script product">
              Simple enough for everyday and perfect for special occasions.
            </h3>
          </div>

          <div className="product-nav-div">
            {/* <Link className="product-nav-link" to="/products/1">
              all
            </Link> */}
            <Link className="product-nav-link" to="/products/12">
              sets
            </Link>
            <Link className="product-nav-link" to="/products/3">
              earrings
            </Link>
            <Link className="product-nav-link" to="/products/4">
              rings
            </Link>
            {/* <Link className="product-nav-link" to="/products/6">
              sale
            </Link> */}
          </div>

          <div className="search-div">
            {/* <input
              type="text"
              className="search-input"
              placeholder="Search for a product"
              onChange={handleChange}
            /> */}
            {/* <PiMagnifyingGlassBold className="icon" /> */}
          </div>

          <div className="right-img marginbtm30">
            <img
              className="product-img"
              src="https://lg-api.techtaleyportfolio.com/uploads/jade_bronze_pearl_optimized_0b61cf0ae9.jpg"
              //src="https://lg-api.techtaleyportfolio.com/uploads/carnelian_mother_of_pearl_set_optimized_56a4c49d6c.jpg"
              // src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1600"
              // src={bannerImg[0].media[0].url}
              alt=""
            />
          </div>

          <section className="product-list section">
            <ProductList
              catId={catId}
              maxPrice={maxPrice}
              sort={sort}
              subCatIds={selectedSubCatIds}
            />
            {targetValue !== "" && (
              <SearchList
                catId={catId}
                query={searchQuery}
                maxPrice={maxPrice}
                sort={sort}
                subCats={selectedSubCatIds}
              />
            )}
            {/* {targetValue !== "" &&               
               <FavoriteList catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCatIds} />
              } */}
          </section>
        </div>
      </section>
    </>
  );
}
