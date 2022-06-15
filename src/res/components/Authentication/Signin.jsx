import React, { useState } from "react";
import { FormInput } from "@libs/reiend/components/Form";
import { useFormik } from "formik";

const Signin = () => {
  // this handle placeholder animation
  const [hasInputEmail, setHasInputEmail] = useState(false);
  const [hasInputPassword, setHasInputPassword] = useState(false);

  const formik = useFormik({
    // form initial values when signning in
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(JSON.stringify(values));
    },
  });

  const handleChangeInput = (event) => {
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
          onChange={handleChangeInput}
          values={formik.values.email}
        />

        <FormInput
          type="password"
          info="password"
          classNameLabel="form__form-label signin__signin-label-password"
          classNameInput="form__form-input signin__signin-input-password"
          hasInput={hasInputPassword}
          classNameChanging="input--changing"
          onChange={handleChangeInput}
          values={formik.values.password}
        />

        <button className="form__form-button signin__signin-button" type="submit">
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
