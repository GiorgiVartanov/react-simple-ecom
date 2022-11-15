import Dropdown from "../atoms/Dropdown";

import { Link } from "react-router-dom";

const Header = ({ className, children }) => {
    return (
        <header
            className={`flex justify-between pt-2 pb-2 pl-5 pr-5 bg-slate-800 shadow-md w-full top-0 fixed z-50 ${className}`}
        >
            {children}
        </header>
    );
};

export default Header;
