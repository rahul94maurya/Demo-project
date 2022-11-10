import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import { productActions } from "../store/slice/product-slice";
import Card from "./Ui/Card";

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
    <Card>
      <div className={classes.content}>
        <div>
          <h4>Product Name : {props.data.name}</h4>
          <p>{props.data.desription}</p>
          <strong>price : {props.data.price}</strong>
        </div>
        <div className={classes.btn_cls}>
          <button className={classes.button} onClick={deleteHandler}>
            Delete
          </button>
          <button className={classes.button} onClick={editHandler}>
            Edit
          </button>
        </div>
      </div>
    </Card>
  );
};
export default Productdetails;
