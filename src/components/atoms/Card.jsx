import { Link } from "react-router-dom";

const Card = ({ to, className, children }) => {
    return (
        <Link
            to={to}
            className={`flex flex-col font-poppins justify-top gap-0.5 shadow-md pt-2 pb-3 pl-3.5 pr-3.5 transition-all ease-out justify-between delay-75 duration-200 relative hover:shadow-lg ${className}`}
        >
            {children}
        </Link>
    );
};

export default Card;
