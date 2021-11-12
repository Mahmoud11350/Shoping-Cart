import React from "react";
import { Field, Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const UserData = () => {
  const handleSubmit = (values) => {
    toast.success("Your Order Will Be Ready In a Hour " + values.userName);
  };

  const renderForm = () => {
    return (
      <Form className="p-3">
        <div className="container my-3 border rounded-3 p-3">
          <div className="form-group my-3">
            <label className="form-label" htmlFor="userName">
              User Name :{" "}
            </label>
            <Field
              name="userName"
              type="text"
              id="userName"
              className="form-control"
            />
            <ErrorMessage name="userName">
              {(errMsg) => <div className="alert alert-danger">{errMsg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-group my-3">
            <label className="form-label" htmlFor="userName">
              City :{" "}
            </label>
            <Field
              name="city"
              type="text"
              id="userName"
              className="form-control"
            />
            <ErrorMessage name="city">
              {(errMsg) => <div className="alert alert-danger">{errMsg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-group my-3">
            <label className="form-label" htmlFor="userName">
              Email Adress :{" "}
            </label>
            <Field
              name="email"
              type="email"
              id="userName"
              className="form-control"
            />
            <ErrorMessage name="email">
              {(errMsg) => <div className="alert alert-danger">{errMsg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-group my-3">
            <label className="form-label" htmlFor="userName">
              Phone Number :{" "}
            </label>
            <Field
              name="phone"
              type="phone"
              id="userName"
              className="form-control"
            />
            <ErrorMessage name="phone">
              {(errMsg) => <div className="alert alert-danger">{errMsg}</div>}
            </ErrorMessage>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Order Now
            </button>
          </div>
        </div>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={{ userName: "", phone: "", city: "", email: "" }}
      onSubmit={handleSubmit}
      render={renderForm}
      validationSchema={Yup.object({
        userName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Your Name Can't Be Skipped"),
        city: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.number().required(),
      })}
    ></Formik>
  );
};

export default UserData;
