import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/slice/product-slice";
// import { sendData } from "../api/api";
import Modal from "./Modal";
import Card from "./Ui/Card";
import classes from "./AddProduct.module.css";

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const nameInputref = useRef();
  const desInputref = useRef();
  const priceInputref = useRef();
  const formHandler = function (event) {
    event.preventDefault();
    const name = nameInputref.current.value;
    const desription = desInputref.current.value;
    const price = priceInputref.current.value;
    if (
      nameInputref.current.value.length > 0 &&
      desInputref.current.value.length > 0 &&
      priceInputref.current.value.length > 0
    ) {
      dispatch(
        productActions.addProduct({ name, desription, price, id: counter })
      );
      setShowModal(true);
      nameInputref.current.value = "";
      desInputref.current.value = "";
      priceInputref.current.value = "";
    }
  };
  const modalHandler = function () {
    setShowModal(false);
  };
  let show;
  if (showModal) {
    show = (
      <Modal onConfirm={modalHandler} title="Product Added succseefully" />
    );
  } else {
    show = (
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <div className={classes.heading}>Enter the product details</div>
          <label htmlFor="name">Product Name : </label>
          <input type="text" id="name" ref={nameInputref} />
          <label htmlFor="des">Product description : </label>
          <textarea id="des" ref={desInputref} />
          <label htmlFor="price">Price : </label>
          <input type="number" id="price" ref={priceInputref} min={0}></input>
          <button className={classes.button} type="submit">
            Add Product
          </button>
        </form>
      </Card>
    );
  }
  return <Fragment>{show}</Fragment>;
};

export default AddProduct;
