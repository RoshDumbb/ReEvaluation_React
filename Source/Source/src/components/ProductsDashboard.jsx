/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getProductsReq,
  sortProducts,
  sortProductshigh,
} from "../Redux/actions";
// import { Navigate,useNavigate } from "react-router-dom";

export const Products = () => {
  // to get all products list on component mounts
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // const [product, setProducts] = useState([]);
  // const [query, setQuery] = useState("");
  // const navigate = useNavigate();
  const [sort, setSort] = useState("");
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    // dispatch(getproductsData())
    const getproductsData = () => {
      axios
        .get("https://movie-fake-server.herokuapp.com/products")
        .then(({ data }) => {
          console.log(data);
          // getProductsReq(data);
          dispatch(getProductsReq(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getproductsData();
  }, []);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    if (e.target.value == "asc") {
      dispatch(sortProducts());
    } else if (e.target.value == "desc") {
      dispatch(sortProductshigh());
    }
  };

  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        {/* {data.map(function (el, id) {
          return (
            <option key={id} value={el}>{el}</option>
          )
        })} */}
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((item) => {
            return (
              <div>
                <img src={item.image} />
                <h3>
                  {item.title}/ Rs:-{item.price}
                </h3>
              </div>
            );
          })}
      </div>
    </>
  );
};
