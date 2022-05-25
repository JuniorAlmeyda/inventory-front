import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../pages/login/login.component";
import TypeWithAside from "../pages/type/type.component";
import CrudWithAside from "../pages/crud/crud.component";
import User from "../pages/register/user/user.component";
import configureStore from "../store";
import RegisterCategory from "../pages/register/category/category.component";
import RegisterProduct from "../pages/register/product/product.component";
import GetProductsWithAside from "../pages/getting/product/getProduct.component";
import GetCategoriesWithAside from "../pages/getting/category/getCategory.component";
import EditCategory from "../pages/edit/category/category.component";
import DeleteCategory from "../pages/delete/category/category.component";
import DeleteProduct from "../pages/delete/product/product.component";
import EditProduct from "../pages/edit/product/product.component";

const { store } = configureStore();

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/index' element={<TypeWithAside />} />
          <Route path='crud'>
            <Route path='categoria' element={<CrudWithAside />} />
            <Route path='producto' element={<CrudWithAside />} />
          </Route>
          <Route path='categoria'>
            <Route path='crear' element={<RegisterCategory />} />
            <Route path='listar' element={<GetCategoriesWithAside />} />
            <Route path='editar' element={<EditCategory />} />
            <Route path='eliminar' element={<DeleteCategory />} />
          </Route>
          <Route path='producto'>
            <Route path='crear' element={<RegisterProduct />} />
            <Route path='listar' element={<GetProductsWithAside />} />
            <Route path='editar' element={<EditProduct />} />
            <Route path='eliminar' element={<DeleteProduct />} />
          </Route>
          <Route path='/createUser' element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
