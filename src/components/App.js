import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Admin from "./Admin";
import Cart from "./Cart";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import UserData from "./User-data";
import Item from "./Item";

class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    // axios.get("http://localhost:3001/products").then((res) => {
    //   const response = res.data.map((product, index) => {
    //     return { ...product, id: index };
    //   });
    //   this.setState({
    //     products: response,
    //   });
    // });
    axios
      .get(
        "https://shoping-cart-97649-default-rtdb.firebaseio.com/products.json"
      )
      .then((res) => {
        let newData = [];
        for (let key in res.data) {
          newData.push(res.data[key]);
        }
        this.setState({ products: newData });
      });
  }

  addCart = (product) => {
    product.isInCart = true;
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route
            path="/admin"
            element={<Admin products={this.state.products} />}
          />
          <Route
            path="/cart"
            element={<Cart products={this.state.products} />}
          />
          <Route
            path="/"
            element={
              <Menu products={this.state.products} addCart={this.addCart} />
            }
          />
          <Route path="/cart/user-data" element={<UserData />} />
          <Route
            path="/item/:param"
            element={<Item products={this.state.products} />}
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
