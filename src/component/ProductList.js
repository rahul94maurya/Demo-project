import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import Productdetails from "./Productdetails";
import { getData } from "../api/api";

const ProductList = () => {
  const location = useLocation();
  useEffect(() => {
    getData();
  }, []);
  const products = useSelector((state) => state.product);
  let show;
  if (products.length > 0) {
    show = (
      <Fragment>
        {products.map((ele) => (
          <Fragment key={ele.id}>
            <Productdetails data={ele} />
          </Fragment>
        ))}
      </Fragment>
    );
  } else show = <p>No product to show. Please add Product!</p>;

  return (
    <Fragment>
      {location.pathname === "/product-admin/product-list" ? show : <Outlet />}
    </Fragment>
  );
};

export default ProductList;
