import React from "react";
import UsappLogoPrimary from "../Illustration/UsappLogoPrimary.jsx";
import UsappLogoSecondary from "../Illustration/UsappLogoSecondary.jsx";

const LandingWelcome = () => {
  return (
    <div className="landing__landing-welcome">
      <UsappLogoSecondary className="usapp-logo-secondary" />
      <h3 className="slogan">a place where you can talk</h3>
      <UsappLogoPrimary className="usapp-logo-primary" />
    </div>
  );
};

export default LandingWelcome;
