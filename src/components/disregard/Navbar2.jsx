import React from 'react';
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import LgLogo from '/assets/legendarygemstone-logo.jpg';
import { useNavigate } from "react-router-dom";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlinePersonOutline,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
  MdMenu
} from "react-icons/md";

import Cart from '../cart/Cart'

import { GiNecklaceDisplay } from "react-icons/gi";

import './navbar.css'

const categoryData = [
  {
    id: "1",
    title: "Women",
    link: "1",
    className: "",
  },
  {
    id: "2",
    title: "Men",
    link: "2",
    className: "",
  }
];

const navData = [
  {
    id: "1",
    title: "About",
    link: "about",
    className: "",
  },
  {
    id: "2",
    title: "Contact",
    link: "contact",
    className: "",
  },
  {
    id: "3",
    title: "Products",
    link: "products/1",
    className: "",
  },
];

export default function Navbar() {
  const [ openCart, setOpenCart ] = useState(false);
  const [ openMenu, setOpenMenu ] = useState(false);
  const products = useSelector(store => store.cart.products)
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsFavorite(!isFavorite);
    //navigate(`/products/${data.id}`);
  }

  const handleNavBar = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <> 
    <div className="nav-menu">
          
      {/* 
      <div className="left">
        {categoryData.map((item) => (
          <div className="nav-link " key={item.id}>
            <NavLink className="nav-link" to={`/products/${item.id}`}>
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>   
      */}

      <div className="left">
        <NavLink to="/" className="logo">
          <img src={LgLogo} alt="logo photo" />
          {/* 
          <GiNecklaceDisplay className="icon md-dark-color" />
          <h1 className="logo-text">My Shop</h1> 
          */}
        </NavLink>
      </div>

      <div className="right">
        <div className="icons menu-icon">
          <MdMenu onClick={handleNavBar} />
        </div> 

        <div className="nav">  
         
          <div className="nav-menu">
            {openMenu && navData.map((item) => (
              <div className={openMenu ? "nav-links show-nav-links" : "nav-links"} key={item.id}>
                <NavLink className="nav-link" to={`/${item.link}`}>
                  {item.title}
                </NavLink>
              </div>
            ))} 
          </div>             

          <div className="nav-icons">          
            <MdOutlinePersonOutline className="icon" />
              {!isFavorite 
              ? <MdFavorite className="icon" onClick={ handleToggle && navigate(`/`)} /> 
              : <MdFavoriteBorder className="icon" onClick={ handleToggle} />
              }
            
            <div className="cartIcon" onClick={()=> setOpenCart(!openCart)}>
              <MdOutlineShoppingCart className="icon" />
              <span>{products.length}</span>
            </div>
          </div>          
        </div>                 
      </div>

      {openCart && <Cart /> }
    </div>
    </>
  );
}
