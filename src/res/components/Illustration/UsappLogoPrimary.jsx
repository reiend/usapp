import React from "react";
import PropTypes from "prop-types";

const UsappLogoPrimary = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 461 421"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.99999C0 4.47714 4.47715 0 10 0H451C456.523 0 461 4.47715 461 10V308C461 313.523 456.523 318 451 318H0V9.99999Z"
        fill="#4FB48B"
      />
      <path d="M0 318H168L67.2364 379.055L0 421V318Z" fill="#4FB48B" />
      <rect x="28" y="23" width="401" height="196" rx="10" fill="white" />
      <rect x="28" y="235" width="268" height="24" rx="10" fill="white" />
      <rect x="28" y="275" width="185" height="24" rx="10" fill="white" />
    </svg>
  );
};

UsappLogoPrimary.propTypes = {
  className: PropTypes.string,
};

export default UsappLogoPrimary;
