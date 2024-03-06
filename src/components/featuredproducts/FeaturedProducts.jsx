import React from 'react';
import FeaturedCard from "./FeaturedCard";
import "./featured.css";

//import { useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeRequest } from "../../makeRequest";

export default function FeaturedProducts({ type }) {

  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pageAttributes, setPageAttributes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(
          `/products?populate=*&filters[type][$eq]=${type}`
        );
        const results = await res.data.data;
        setLoading(true);

        setApiData(results);
        setPageAttributes(results.map((data) => data.attributes));
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  return (
    <>
      {loading && (
        <section className="section featured responsive">
          <div className="featured-div flexrow flexend">
            <h1>{type} Products</h1>

            {apiData.map((data) => (
              <FeaturedCard data={data} type={type} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
