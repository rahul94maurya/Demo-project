import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./ProductAdmin.module.css";

const ProductAdmin = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <div>Product Admin</div> */}
        <nav>
          <ul className={classes.ul}>
            <li>
              <Link to="product-list" className={classes.links}>
                Product
              </Link>
            </li>
            <li>
              <Link to="add-product" className={classes.links}>
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default ProductAdmin;
