import { Link } from "react-router-dom";
import { forwardRef } from "react";

const Card = forwardRef(({ onClick, className, children }, ref) => {
    return (
        <div
            ref={ref}
            onClick={onClick}
            className={`flex flex-col font-poppins relative justify-top gap-0.5 shadow-md pt-2 pb-3 pl-3.5 pr-3.5 transition-all ease-out justify-between delay-75 duration-200 mr-7 ml-7 xs:mr-0 xs:ml-0 xs:h-96 xs:w-52 hover:shadow-lg ${className}`}
        >
            {children}
        </div>
    );
});

export default Card;
