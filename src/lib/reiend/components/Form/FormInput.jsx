import React from "react";
import PropTypes from "prop-types";

// form input that has placeholder animation
const FormInput = ({
  type,
  info,
  classNameLabel,
  classNameInput,
  hasInput,
  onChange,
  classNameChanging,
  values,
}) => {
  return (
    <div>
      <label
        htmlFor={info}
        className={`${classNameLabel} ${hasInput ? classNameChanging : ""}`}
      >
        <span>{info}</span>
      </label>
      <input
        className={classNameInput}
        type={type}
        id={info}
        name={info}
        onChange={onChange}
        value={values}
      />
    </div>
  );
};


FormInput.propTypes = {
  type: PropTypes.string,
  info: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  hasInput: PropTypes.bool,
  onChange: PropTypes.func,
  classNameChanging: PropTypes.string,
  values: PropTypes.string,
};

export default FormInput;

// end form input that has placeholder animation
