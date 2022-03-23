/** @format */

import { Link } from "react-router-dom";
import React from "react";
import "../css/Navbar.css"
const links = [
  {
    title: "Home",
    link: "/",
  },
  //   add the other link as well
];

export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div className="Navbar">
      <Link id="home"  to={"/"}>Home</Link>
      <Link id="about"  to={"/about"}>About</Link>
      <Link id="product"  to={"/products"}>products</Link>
    </div>
  );
};
