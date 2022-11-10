import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import { productActions } from "../store/slice/product-slice";
import Modal from "./Modal";

const Productdetails = (props) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editHandler = function () {
    navigate("edit-product", { state: props.data });
  };
  const deleteHandler = function () {
    setShowModal(true);
    dispatch(productActions.deleteProduct(props.data.id));
    console.log("delete product");
  };
  const modalHandler = function () {
    setShowModal(false);
  };
  let show;
  if (showModal) {
    show = (
      <Modal
        onConfirm={modalHandler}
        title="Modal window"
        message="product edited succseefully"
      />
    );
  } else {
    show = (
      <Fragment>
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
      </Fragment>
    );
  }
  return <Fragment>{show}</Fragment>;
};
export default Productdetails;
