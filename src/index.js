import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainBanner from "./components/MainBanner";
import Profile from "./components/Profile";
import CreateAccount from "./components/createAccount";
import OnProcessing from "./components/OnProcessing";
import AddProduct from "./components/AddProduct";
import Products from './components/Products';
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<MainBanner />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/OnProcessing" element={<OnProcessing />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/CartPage" element={<CartPage />}/>
      <Route path="/ProductPage/:Product_Id" element={<ProductPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
