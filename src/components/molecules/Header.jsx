import Dropdown from "../atoms/Dropdown";
import Navigation from "./Navigation";
import NavigationLink from "../atoms/NavigationLink";

import { Link, NavLink } from "react-router-dom";

const Header = ({ categories }) => {
    return (
        <header
            className={`flex justify-between pt-2 pb-2 pl-5 pr-5 bg-slate-800 shadow-md w-full top-0`}
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
                            <NavigationLink
                                className={({ isActive }) =>
                                    [
                                        `pt-2 pb-2 sm:pt-0 sm:pl-4 sm:pr-4 whitespace-nowrap w-full text-center ${
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
                            </NavigationLink>
                        ))}
                    </Dropdown>
                    <NavigationLink to="/">home</NavigationLink>
                    <NavigationLink to="/cart">cart</NavigationLink>
                    <NavigationLink to="/register">register</NavigationLink>
                    <NavigationLink to="/login">login</NavigationLink>
                </Navigation>
            </div>
        </header>
    );
};

export default Header;
