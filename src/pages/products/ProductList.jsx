import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";

export default function ProductList({catId, maxPrice, sort, subCats}) {
  const navigate = useNavigate()

  const { apiData, loading, error} = useFetch(`/products?populate=*
  &filters[categories][id]=${catId}${subCats.map(item => `
  &filters[sub_categories][id][$eq]=${item}`)}
  &filters[cost][$lte]=${maxPrice}
  &sort=cost:${sort}`); 

    
  return (
    <>
      {loading ? "loading" : apiData?.map(data =>    
          <div className="product-list-div" key={data.id} onClick={() => navigate(`/single-product/${data.id}`)}>      
            <img className="product-list-img" 
              src={data.attributes.media[0].image} 
              alt={`${data.attributes.title} photo`} 
            />          
           
            <p className='bold'>{data.attributes.title}</p>   
            <p>${data.attributes.cost}</p>
          </div>              
      )}
    </>
  );
}