import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/slice/product-slice";
// import { sendData } from "../api/api";
import Modal from "./Modal";

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
      <Modal
        onConfirm={modalHandler}
        title="Modal window"
        message="product Added succseefully"
      />
    );
  } else {
    show = (
      <form onSubmit={formHandler}>
        <div>Enter the product details</div>
        <div>
          <div>
            <label htmlFor="name">Product Name : </label>
            <div>
              <input type="text" id="name" ref={nameInputref} />
            </div>
          </div>
          <div>
            <label htmlFor="des">Product description : </label>
            <div>
              <textarea id="des" ref={desInputref} />
            </div>
          </div>
          <div>
            <label htmlFor="price">price : </label>
            <input type="number" id="price" ref={priceInputref} min={0}></input>
          </div>
          <div>
            <button type="submit">Add Product</button>
          </div>
        </div>
      </form>
    );
  }
  return <Fragment>{show}</Fragment>;
};

export default AddProduct;
