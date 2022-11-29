import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, className, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                [
                    `font-poppins hover:text-slate-300 transform-all delay-75 duration-200 ease-out pb-1 pt-1 sm:pt-0 sm:pb-0 w-full text-center ${className} ${
                        isActive ? "text-slate-100" : "text-slate-400"
                    }`,
                ].join(" ")
            }
        >
            {children}
        </NavLink>
    );
};

export default NavigationLink;
