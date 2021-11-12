import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Cart = ({ products }) => {
  const cart = products.filter((product) => {
    return product.isInCart;
  });

  const [carts, setCarts] = useState(cart);
  const [price, setPrice] = useState(0);

  const handlePlus = (product) => {
    const updatedProducts = [...carts];
    let index = updatedProducts.indexOf(product);
    updatedProducts[index].count++;
    setCarts(updatedProducts);
    let productPrice = updatedProducts[index].price;
    setPrice((oldPrice) => oldPrice + productPrice);
  };
  const handleMinus = (product) => {
    const updatedProducts = [...carts];
    let index = updatedProducts.indexOf(product);
    if (updatedProducts[index].count > 0) {
      updatedProducts[index].count--;
      const productPrice = updatedProducts[index].price;
      setPrice((oldPrice) => oldPrice - productPrice);
    }
    setCarts(updatedProducts);
  };

  const handleRemove = (product) => {
    let newCart = carts.filter((cart) => {
      return cart.id !== product.id;
    });
    setCarts(newCart);
    let productPrice = product.price;
    if (product.count > 0) {
      setPrice((oldPrice) => oldPrice - productPrice * product.count);
    }
  };

  const submitOrder = () => {
    axios
      .post("http://localhost:3001/order", carts)
      .then(() => {
        return toast.info(
          "Please Fill The Next Form To Contact You Once Your Order Is Ready"
        );
      })
      .catch(() => {
        return toast.error(
          "You Got Proplem With The Server Please Try Again Later"
        );
      });
  };
  return (
    <div className="container mt-3">
      <h1 className="my-3 text-uppercase text-primary">Shoping Cart</h1>
      <div>
        {carts.map((product) => {
          return (
            <div className="d-flex align-items-center justify-content-between mt-3 border-bottom">
              <h2 className="text-uppercase">{product.name}</h2>
              <ul className="list-unstyled d-flex align-items-center">
                <li className="mx-3">
                  <span className="badge bg-info fs-5">{product.count}</span>
                </li>
                <li
                  className="mx-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePlus(product)}
                >
                  <span className="badge bg-success fs-5 cursor-pointer">
                    +
                  </span>
                </li>
                <li
                  className="mx-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMinus(product)}
                >
                  <span className="badge bg-warning fs-5">-</span>
                </li>
                <li
                  className="mx-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemove(product)}
                >
                  <i className="bi bi-trash-fill text-danger fs-5"></i>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3 bg-dark text-white p-3 rounded-3">
        <h3 className="mt-3">Total Price : $ {price}</h3>
        <NavLink to="/cart/user-data">
          <button className="btn btn-danger mt-3" onClick={submitOrder}>
            Order Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
