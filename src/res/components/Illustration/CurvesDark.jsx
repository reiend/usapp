import React from "react";
import PropTypes from "prop-types";

const CurvesDark = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 1440 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 330H-9V156.529C72.7333 117.035 272.828 31.2493 419.343 4.05383C602.486 -29.9406 654.452 164.527 959.691 44.0472C1203.88 -52.3369 1381.64 74.8755 1440 150.53V330Z"
        fill="#C8FBE1"
      />
    </svg>
  );
};

CurvesDark.propTypes = {
  className: PropTypes.string,
};


export default CurvesDark;
