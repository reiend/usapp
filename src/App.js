import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@libs/reiend/scss/index.scss";
import Landing from "@components/Landing.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
