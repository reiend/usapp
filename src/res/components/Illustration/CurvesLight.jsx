import React from "react";
import PropTypes from "prop-types";

const CurvesLight = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 1437 331"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1436.5 331H0.5V157.5C81.5 118 279.8 32.2 425 4.99999C606.5 -29 658 165.5 960.5 45C1202.5 -51.4 1378.67 75.8333 1436.5 151.5V331Z"
        fill="#EBFFF5"
      />
    </svg>
  );
};

CurvesLight.propTypes = {
  className: PropTypes.string,
};

export default CurvesLight;
