import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import { useUser } from "@clerk/react";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  let { user } = useUser();
  return (
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
