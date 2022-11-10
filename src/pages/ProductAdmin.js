import React, { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";
import classes from "./ProductAdmin.module.css";

const ProductAdmin = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul className={classes.ul}>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : " "
                }
                to="product-list"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : " "
                }
                to="add-product"
              >
                Add Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default ProductAdmin;
