import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Item = ({ products }) => {
  const path = useParams();
  const initialValues = {
    productName: "",
    price: "",
  };

  const handleSubmit = (values) => {};
  useEffect(() => {
    if (path.param !== "new" && products.length > 0) {
      let itemName = products[path.param].name;
      let itemPrice = products[path.param].price;
    }
    // eslint-disable-next-line
  }, [products]);

  return (
    <div className="container my-3 p-3">
      <h1
        className={
          path.param === "new" ? "text-primary m-3" : "text-success m-3"
        }
      >
        {path.param === "new" ? "Add Product" : "Edit Product"}
      </h1>

      <Formik
        initialValues={{
          ...initialValues,
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          productName: Yup.string().required("Product Name Is Required Field"),
          price: Yup.number("Price Must be A Number").required(
            "Price Is required Field"
          ),
        })}
      >
        <Form className="p-3 border rounded-3 m-3">
          <div className="form-group  m-3">
            <label className="form-label text-secondary">Product Name :</label>
            <Field className="form-control" name="productName" type="text" />
            <ErrorMessage name="productName">
              {(errormsg) => (
                <div className="alert alert-danger">{errormsg}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="form-group  m-3">
            <label className="form-label text-secondary">Product Price :</label>
            <Field className="form-control" name="price" type="number" />
            <ErrorMessage name="price">
              {(errormsg) => (
                <div className="alert alert-danger">{errormsg}</div>
              )}
            </ErrorMessage>
          </div>
          {path.param === "new" ? (
            <button type="submit" className="btn btn-primary  m-3">
              Add
            </button>
          ) : (
            <button type="submit" className="btn btn-success  m-3">
              Edit
            </button>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Item;
