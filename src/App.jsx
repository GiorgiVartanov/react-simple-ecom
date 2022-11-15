import Dropdown from "./components/atoms/Dropdown";
import Navigation from "./components/molecules/Navigation";
import Header from "./components/molecules/Header";
import Home from "./pages/Home.page";
import Product from "./pages/Product.page";
import Products from "./pages/Products.page";
import Cart from "./pages/Cart.page";

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

    const renderHeader = () => {
        return (
            <Header>
                <Link to="/">
                    <h1 className="font-poppins text-2xl text-slate-100 font-bold">
                        Ecom
                    </h1>
                </Link>

                <div className="flex gap-3 items-center">
                    <Navigation>
                        <Dropdown name="products">
                            {data.map((category) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        [
                                            `pl-8 pr-8 pt-2 pb-2 sm:pt-0 sm:pl-4 sm:pr-4  hover:text-slate-300 transform-all ease-out delay-75 duration-200 whitespace-nowrap w-full text-center ${
                                                isActive
                                                    ? "text-slate-100"
                                                    : "text-slate-400"
                                            }`,
                                        ].join(" ")
                                    }
                                    key={category}
                                    to={`/products/${category.replace(
                                        // it replaces spaces
                                        /\s+/g,
                                        "%20"
                                    )}`}
                                >
                                    {category}
                                </NavLink>
                            ))}
                        </Dropdown>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                [
                                    `font-poppins hover:text-slate-300 transform-all delay-75 duration-200 ease-out pb-1 pt-1 sm:pt-0 sm:pb-0  w-full text-center ${
                                        isActive
                                            ? "text-slate-100"
                                            : "text-slate-400"
                                    }`,
                                ].join(" ")
                            }
                        >
                            home
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                [
                                    `font-poppins hover:text-slate-300 transform-all delay-75 duration-200 ease-out pb-1 pt-1 sm:pt-0 sm:pb-0 w-full text-center ${
                                        isActive
                                            ? "text-slate-100"
                                            : "text-slate-400"
                                    }`,
                                ].join(" ")
                            }
                        >
                            cart
                        </NavLink>
                    </Navigation>
                </div>
            </Header>
        );
    };

    return (
        <>
            {!isLoading ? renderHeader() : ""}
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
            </Routes>
        </>
    );
};

export default App;
