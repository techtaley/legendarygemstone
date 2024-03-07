import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";

import "./products.css";

export default function ProductList({ catId, maxPrice, sort, subCats }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const { apiData, loading, error } = useFetch(`/products?populate=*&filters[categories][id]=${catId}${subCats.map((item) => `&filters[sub_categories][id][$eq]=${item}`)}&filters[regular_price][$lte]=${maxPrice}&sort=regular_price:${sort}`);


  //    &filters[regular_price][$lte]=${maxPrice}
  return (
    <>
        {loading ? " " : apiData?.map(data =>    
          <Card data={data} key={data.id} />
        )}    
    </>
  );
}
