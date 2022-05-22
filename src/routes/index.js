import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.component";
import TypeWithAside from "../pages/type/type.component";
import CrudWithAside from "../pages/crud/crud.component";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/index' element={<TypeWithAside />} />
        <Route path='/crud' element={<CrudWithAside />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
