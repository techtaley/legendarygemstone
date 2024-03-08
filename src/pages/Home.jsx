import React from "react";
import Banner from "./../components/banner/Banner";
import FeaturedProducts from "../components/featuredproducts/FeaturedProducts";
import Categories from "../components/categories/Categories";
import { FaQuoteLeft } from "react-icons/fa";

export default function Home() {
  return (
    <div className="main">
      <div className="statement">
        <h2 className="cursive-script">Unqiuely Handcrafted Jewelry</h2>
        <p className="sub-statement">Earthy. Expressive. Legendary.</p>
      </div>
      <Banner />
      <div className="statement">
        <h2 className="cursive-script">
          <FaQuoteLeft className="quote" />
          You know the world is a magical place when Mother Earth grows her own
          jewelry.
        </h2>
      </div>
      <FeaturedProducts type="Featured" />
      <div className="statement">
        <h2 className="cursive-script">A few of my favorite things...</h2>
      </div>
      <Categories />
      <FeaturedProducts type="Trending" />
    </div>
  );
}
