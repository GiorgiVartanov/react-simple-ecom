import { useState, useEffect, useRef } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

import { useOnClickOutside } from "../../hooks/useOnOutsideClick";

const Dropdown = ({ name, className, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownButton = useRef();

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const renderDropdownMenu = () => {
        return (
            <div className="animate-expand sm:absolute static sm:top-8 w-screen sm:w-fit justify-around items-center right-0 sm:right-[-50%] pt-3 pb-3 pl-2 pr-2 flex flex-col gap-1 bg-slate-700 sm:bg-slate-800 text-slate-200 font-poppins z-10 sm:shadow-md shadow-inner-md">
                {children}
            </div>
        );
    };

    useOnClickOutside(dropdownButton, () => {
        setIsOpen(false);
    });

    return (
        <div
            ref={dropdownButton}
            className={`sm:relative items-center flex flex-col ${className}`}
        >
            <button
                onClick={handleClick}
                className={`font-poppins justify-center sm:w-fit pt-2 pb-2 sm:pt-0 sm:pb-0 sm:pl-0 sm:pr-0 hover:text-slate-300 transform-all delay-75 duration-200 ease-out cursor-default flex items-center gap-1.5 ${
                    isOpen ? "text-slate-100" : "text-slate-400"
                }`}
            >
                {name}
                <IoIosArrowDropupCircle
                    className={`transform-all ease-out delay-75 duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>
            {isOpen ? renderDropdownMenu() : ""}
        </div>
    );
};

export default Dropdown;
