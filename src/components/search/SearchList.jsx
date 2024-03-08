import React from 'react';
import { useState } from "react";
import useFetch from './../../hooks/useFetch';
import Card from "./../../pages/products/Card";
import './../../pages/products/products.css';

import axios from "axios";
import { Link, useParams } from "react-router-dom"; 

export default function SearchList({query, maxPrice, sort, subCats}) {

    const { apiData, loading, error} = useFetch(`
    /products?populate=*&filters[desc][$contains]=${query}`);

    return (
        <>
          {loading ? " " : apiData?.map(data =>    
            <Card data={data} key={data.id} />
          )}
        </>
      );  
}
