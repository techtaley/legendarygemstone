import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LgLogo from "/assets/legendarygemstone-logo.jpg";
import { useNavigate } from "react-router-dom";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlinePersonOutline,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
  MdMenu,
} from "react-icons/md";

import Cart from "../cart/Cart";

import { GiNecklaceDisplay } from "react-icons/gi";

import "./navbar.css";

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
  },
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
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const products = useSelector((store) => store.cart.products);
  const [isWishlist, setIsWishlist] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsWishlist(!isWishlist);
    //navigate(`/products/${data.id}`);

    //show /wishlist page  or type wishlist
  };

  return (
    <>
      <div className="nav-menu">
        {/* <div className="left">
        {categoryData.map((item) => (
          <div className="nav-link " key={item.id}>
            <NavLink className="nav-link" to={`/products/${item.id}`}>
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>   */}

        <div className="left-nav">
          <NavLink to="/" className="logo">
            <img src={LgLogo} alt="logo photo" />
            {/* <GiNecklaceDisplay className="icon md-dark-color" />
            <h1 className="logo-text">My Shop</h1> */}
          </NavLink>
        </div>

        <div className="right-nav">
          <div className="icons">
            {/* <MdOutlinePersonOutline className="icon" />
            {!isFavorite ? <MdFavorite className="icon" onClick={ handleToggle && navigate(`/`)} /> 
            : <MdFavoriteBorder className="icon" onClick={ handleToggle} />
            } */}

            <MdOutlinePersonOutline className="icon" />

            {/* {isWishlist 
              ? <MdFavorite className="icon" onClick={(e) => handleToggle} />
              : <MdFavoriteBorder className="icon" onClick={(e) => handleToggle} />
            } */}

            {isWishlist 
              ? <MdFavorite className="icon" onClick={(e) => handleToggle} />
              : <MdFavoriteBorder className="icon" onClick={(e) => handleToggle} />
            }

            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <MdOutlineShoppingCart className="icon" />
              <span>{products.length}</span>
            </div>
          </div>

          <div className="icons menu-icon">
            <MdMenu onClick={() => setOpenMenu(!openMenu)} />
          </div>

          {openCart && <Cart />}


          {/* <div className="nav-link-menu">        
            {navData.map((item) => (
              <div className={openMenu ? "nav-links show-nav-links" : "nav-links"} key={item.id}>
                <NavLink className="nav-link" to={`/${item.link}`}>
                  {item.title}
                </NavLink>
              </div>
            ))}
          </div>   */}
        </div>

      </div>

      <div className="center-nav">
        <div className="nav-link-menu">
          {navData.map((item) => (
            <div
              className={openMenu ? "nav-links show-nav-links" : "nav-links"}
              key={item.id}
            >
              <NavLink className="nav-link" to={`/${item.link}`}>
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
