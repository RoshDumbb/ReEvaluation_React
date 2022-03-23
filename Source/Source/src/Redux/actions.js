import axios from "axios"
import { GETPRODUCT_REQUEST, HIGH_TO_LOW, LOW_TO_HIGH } from "./actionTypes";

// action for get products request
export const getProductsReq = (payload) => {
    return{
        type: GETPRODUCT_REQUEST,
        payload,
    }
}
// export const getproductsData = () => (dispatch) => {
//   axios .get("https://movie-fake-server.herokuapp.com/products")
//       .then((data) => {
//         console.log(data)
//       dispatch(getProductsReq(data));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const 

// action for get products success

const getProductsSuccess = () => ({});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
const getproductsData = () => ({});

// action object for sort  feature


export const sortProducts = (payload) => {
  return {
    type: LOW_TO_HIGH,
    payload,
  };
};

// const sortProducts = () => ({});
export const sortProductshigh = (payload) => {
  return {
    type: HIGH_TO_LOW,
    payload,
  };
};