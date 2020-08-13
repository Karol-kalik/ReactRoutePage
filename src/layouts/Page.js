import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductListPage from "../pages/ProductListPage";
import ContactPage from "../pages/ContactPage";
import AdminPanel from "../pages/AdminPanel";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <>
    <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/products"  component={ProductListPage} />
    <Route path="/product/:id"  component={ProductsPage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/admin" exact component={AdminPanel} />
    <Route path="/login" exact component={LoginPage} />
    <Route component={ErrorPage} />

    </Switch>
    </>
   );
}

export default Page;