import { Link } from "react-router-dom";
import { forwardRef } from "react";

const Card = forwardRef(({ onClick, className, children }, ref) => {
    return (
        <div
            ref={ref}
            onClick={onClick}
            className={`flex flex-col font-poppins relative justify-top gap-0.5 shadow-md pt-2 pb-3 pl-3.5 pr-3.5 transition-all ease-out justify-between delay-75 duration-200 relative hover:shadow-lg ${className}`}
        >
            {children}
        </div>
    );
});

export default Card;
