import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ products, addCart }) => {
  return (
    <>
      <div className="container mt-3 ">
        <h1 className="text-primary">Menu</h1>
        <table className="table  table-striped table-hover  table-primary mt-3  mx-auto   ">
          <thead className="rounded-3">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="text-uppercase fw-bold p-3">{product.name}</td>
                  <td>
                    <i className="bi bi-currency-dollar"></i> {product.price}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary "
                      onClick={() => addCart(product)}
                    >
                      <i className="bi bi-cart-plus-fill"></i> Add to Cart{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>{" "}
        <NavLink to="/cart">
          <button className="btn btn-primary">To Cart</button>
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
