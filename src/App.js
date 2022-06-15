import "@libs/reiend/scss/index.scss";
import "@styles/usapp/fonts.scss";
import "@styles/usapp/index.scss";

import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@components/Landing";
import Signup from "@components/Authentication/Signup.jsx";
import Chat from "@components/Chat";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
