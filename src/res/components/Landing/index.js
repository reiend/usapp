import React from "react";
import Signin from "@components/Authentication/Signin.jsx";
import LandingWelcome from "./LandingWelcome.jsx";
import CurvesLight from "../Illustration/CurvesLight.jsx";
import CurvesDark from "../Illustration/CurvesDark.jsx";


const Landing = () => {
  return (
    <div className="landing">
      <main className="box box--fluid--xxxsm mx--auto">
        <LandingWelcome />
        <Signin />
      </main>

      <CurvesLight className="landing__curves--light" />
      <CurvesDark className="landing__curves--dark" />
    </div>
  );
};

export default Landing;
