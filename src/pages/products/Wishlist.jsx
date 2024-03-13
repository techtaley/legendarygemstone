import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";

import "./products.css";
import { useDispatch, useSelector } from "react-redux";

export default function Wishlist({ catId, maxPrice, sort, subCats }) {
  //const [isFavorite, setIsFavorite] = useState(false);
    const { favorites } = useSelector(state => state.favorite)
    const dispatch = useDispatch()

  //const navigate = useNavigate();

//   const { apiData, loading, error } = useFetch(`/products?populate=*
//     &filters[categories][id]=${catId}${subCats.map(
//     (item) => `
//     &filters[sub_categories][id][$eq]=${item}`
//   )}
//     &filters[regular_price][$lte]=${maxPrice}
//     &sort=regular_price:${sort}
//     `);

  return (
    <>
        {loading ? " " : favorites?.map(data =>    
            <Card data={data} key={data.id} />
        )}    
    </>
  );
}
