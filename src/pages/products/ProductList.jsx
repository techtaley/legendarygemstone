import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";

import "./products.css";

export default function ProductList({ catId, maxPrice, sort, subCatIds, query }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const { apiData, loading, error } = useFetch(  //action taken on one category
    `/products?populate=*&filters[categories][id]=${catId}${subCatIds.map(  //map through cat ids get cat id
      (catid) => `&filters[sub_categories][id][$eq]=${catid}`)}
      &filters[regular_price][$lte]=${maxPrice}&sort=regular_price:${sort}`);
      
  return (
    <>
        {loading ? " " : apiData?.map(data =>    
          <Card data={data} key={data.id} />
        )}    
    </>
  );
}
