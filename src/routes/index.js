import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login/login.component";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
    </Routes>
  );
};

export default Router;
