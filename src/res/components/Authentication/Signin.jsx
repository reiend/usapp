import React, { useState, useEffect } from "react";
import { FormInput } from "@libs/reiend/components/Form";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const USER_CREDENTIALS = {
  EMAIL: 0,
  PASSWORD: 1,
};

// USER_ONE_EMAIL=NewUsapp1@gmail.com
// USER_ONE_PASSWORD=NewUsapp1

const Signin = () => {
  // this handle placeholder animation
  const [hasInputEmail, setHasInputEmail] = useState(false);
  const [hasInputPassword, setHasInputPassword] = useState(false);
  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chat", { replace: true });
  };

  // sign in and save account on local storage
  const signin = async (values, resetForm) => {
    const { EMAIL, PASSWORD } = USER_CREDENTIALS;

    await axios({
      method: "post",
      url: `${process.env.BASE_URL}auth/sign_in`,
      data: {
        email: process.env.USER_ONE_EMAIL,
        password: process.env.USER_ONE_PASSWORD,
        email: values.email,
        password: values.password,
      },
    })
      .then((res) => {
        Object.entries(res.headers).forEach((header) => {
          localStorage.setItem(header[EMAIL], header[PASSWORD]);
        });

        if (res.status === 200) {
          goToChat();
        }
      })
      .catch(() => {
        // clear signin form inputs
        resetForm({ email: "", password: "" });
      });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    const client = localStorage.getItem("client");
    const expiry = localStorage.getItem("expiry");
    const uid = localStorage.getItem("uid");

    if (accessToken && client && expiry && uid) goToChat();
  }, []);

  const formik = useFormik({
    // form initial values when signning in
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => await signin(values, resetForm),
  });

  const handleChangeInputSignin = (event) => {
    const target = event.target;
    const inputType = target.type;
    const inputValue = target.value;

    // uses states above that handled input animation placeholder
    if (inputType === "email") {
      if (inputValue) setHasInputEmail(true);
      else setHasInputEmail(false);
    } else if (inputType === "password") {
      if (inputValue) setHasInputPassword(true);
      else setHasInputPassword(false);
    }
    formik.handleChange(event);
  };

  return (
    <div className="signin">
      <h2 className="signin__signin-heading">Sign in to Usapp</h2>

      <form className="form signin__signin-form" onSubmit={formik.handleSubmit}>
        <FormInput
          type="email"
          info="email"
          classNameLabel="form__form-label signin__signin-label-email"
          classNameInput="form__form-input signin__signin-input-email"
          hasInput={hasInputEmail}
          classNameChanging="input--changing"
          onChange={handleChangeInputSignin}
          values={formik.values.email}
        />

        <FormInput
          type="password"
          info="password"
          classNameLabel="form__form-label signin__signin-label-password"
          classNameInput="form__form-input signin__signin-input-password"
          hasInput={hasInputPassword}
          classNameChanging="input--changing"
          onChange={handleChangeInputSignin}
          values={formik.values.password}
        />

        <button
          className="form__form-button signin__signin-button"
          type="submit"
        >
          sign in
        </button>
      </form>
      <div className="signin__signin-reminder">
        <span>no account?</span>
        <a>create an account</a>
      </div>
    </div>
  );
};

export default Signin;
