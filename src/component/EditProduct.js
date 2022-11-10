import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { productActions } from "../store/slice/product-slice";
import Modal from "./Modal";

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
        title="Modal window"
        message="product edited succseefully"
      />
    );
  } else {
    show = (
      <form onSubmit={formHandler}>
        <div>Edit product details</div>
        <div>
          <label htmlFor="name">Product Name : </label>
          <div>
            <input
              type="text"
              id="name"
              ref={nameInputref}
              defaultValue={location.state.name}
            />
          </div>
        </div>
        <div>
          <label htmlFor="des">Product description : </label>
          <div>
            <textarea
              id="des"
              ref={desInputref}
              defaultValue={location.state.desription}
            />
          </div>
        </div>
        <div>
          <label htmlFor="price">price : </label>
          <input
            type="number"
            id="price"
            ref={priceInputref}
            min={0}
            defaultValue={location.state.price}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    );
  }
  return <Fragment>{show}</Fragment>;
};

export default EditProduct;
