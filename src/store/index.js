import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import UserReducer from "./reducers/UserReducer";
const storeCombined = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  products: productReducer,
  usuario: UserReducer,
});

const configureStore = () => {
  const store = createStore(
    storeCombined,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return { store };
};
export default configureStore;
