import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Admin = ({ products }) => {
  const [productsState, setProductsState] = useState([]);
  useEffect(() => {
    if (products) setProductsState(products);
  }, [products]);

  const deleteHandler = (product) => {
    //clone
    let newProducts = productsState.filter((cart) => {
      return cart.id !== product.id;
    });
    setProductsState(newProducts);

    // axios.post(
    //   "https://shoping-cart-97649-default-rtdb.firebaseio.com/products.json",
    //   newProducts
    // );
  };
  return (
    <>
      <div className="container mt-3 ">
        <h1 className="text-primary my-3">Admin</h1>
        <NavLink to="/item/new">
          <button className="btn btn-success">Add New Item </button>
        </NavLink>
        <table className="table  table-striped table-hover  table-light mt-3  mx-auto   ">
          <thead className="rounded-3">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {productsState.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="text-uppercase fw-bold p-3">{product.name}</td>
                  <td>
                    <i class="bi bi-currency-dollar"></i> {product.price}
                  </td>
                  <td>
                    <NavLink to={`/item/${product.id}`}>
                      <button className="btn btn-primary ">
                        <i className="bi bi-gear"></i> Edit{" "}
                      </button>
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger "
                      onClick={() => deleteHandler(product)}
                    >
                      <i class="bi bi-trash"></i> delete{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>{" "}
      </div>
      ;
    </>
  );
};

export default Admin;
