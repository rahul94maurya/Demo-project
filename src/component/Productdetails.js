import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import { productActions } from "../store/slice/product-slice";

const Productdetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editHandler = function () {
    navigate("edit-product", { state: props.data });
  };
  const deleteHandler = function () {
    dispatch(productActions.deleteProduct(props.data.id));
  };

  return (
    <div className={classes.container}>
      <h3>Product name: {props.data.name}</h3>
      <div className={classes.content}>
        <div>
          <div>Product description : {props.data.desription}</div>
          <div>Product price : {props.data.price}</div>
        </div>
        <div>
          <div>
            <button onClick={deleteHandler}>Delete</button>
          </div>
          <div>
            <button onClick={editHandler}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Productdetails;
