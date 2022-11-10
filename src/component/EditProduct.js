import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productActions } from "../store/slice/product-slice";
import Modal from "./Modal";
import classes from "./AddProduct.module.css";
import Card from "./Ui/Card";

const EditProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameInputref = useRef();
  const desInputref = useRef();
  const priceInputref = useRef();
  const location = useLocation();

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
      const data = { name, desription, price, id: location.state.id };
      dispatch(
        productActions.updateProduct({ id: location.state.id, product: data })
      );
      setShowModal(true);
    }
  };
  const modalHandler = function () {
    setShowModal(false);
    navigate(-1);
  };
  let show;
  if (showModal) {
    show = (
      <Modal
        onConfirm={modalHandler}
        title="Product edited succseefully"
        message=""
      />
    );
  } else {
    show = (
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <div className={classes.heading}>Edit the product details</div>
          <label htmlFor="name">Product Name : </label>

          <input
            type="text"
            id="name"
            ref={nameInputref}
            defaultValue={location.state.name}
          />

          <label htmlFor="des">Product description : </label>

          <textarea
            id="des"
            ref={desInputref}
            defaultValue={location.state.desription}
          />

          <label htmlFor="price">Price : </label>
          <input
            type="number"
            id="price"
            ref={priceInputref}
            min={0}
            defaultValue={location.state.price}
          />

          <button className={classes.button} type="submit">
            Add Product
          </button>
        </form>
      </Card>
    );
  }
  return <Fragment>{show}</Fragment>;
};

export default EditProduct;
