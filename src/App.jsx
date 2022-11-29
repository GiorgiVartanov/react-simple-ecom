import Dropdown from "./components/atoms/Dropdown";
import Navigation from "./components/molecules/Navigation";
import Header from "./components/molecules/Header";
import Home from "./pages/Home.page";
import Product from "./pages/Product.page";
import Products from "./pages/Products.page";
import Cart from "./pages/Cart.page";
import Register from "./pages/Register.page";
import Login from "./pages/Login.page";
import Footer from "./components/molecules/Footer";

import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const App = () => {
    const { isLoading, error, data } = useQuery(["allCategories"], () =>
        Axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/products/categories`
        ).then((res) => res.data)
    );

    return (
        <div className="flex flex-col h-screen">
            {!isLoading ? <Header categories={data} /> : ""}
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/:id"
                    element={<Product />}
                />
                <Route
                    path="/products/:category"
                    element={<Products />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
