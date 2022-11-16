import Dropdown from "../atoms/Dropdown";
import Navigation from "./Navigation";

import { Link, NavLink } from "react-router-dom";

const Header = ({ categories }) => {
    return (
        <header
            className={`flex justify-between pt-2 pb-2 pl-5 pr-5 bg-slate-800 shadow-md w-full top-0 z-50`}
        >
            <Link to="/">
                <h1 className="font-poppins text-2xl text-slate-100 font-bold">
                    Ecom
                </h1>
            </Link>

            <div className="flex gap-3 items-center">
                <Navigation>
                    <Dropdown name="products">
                        {categories.map((category) => (
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
        </header>
    );
};

export default Header;
