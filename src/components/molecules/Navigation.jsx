import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { useOnClickOutside } from "../../hooks/useOnOutsideClick";

const Navigation = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimating] = useState(false);

    const hamburgerButton = useRef();

    const handleMenuButtonClick = () => {
        setAnimating(true);
        setIsOpen((prev) => !prev);
    };

    const handleAnimationEnd = () => {
        setAnimating(false);
    };

    useOnClickOutside(hamburgerButton, () => {
        setIsOpen(false);
    });

    return (
        <>
            <nav
                className="z-30"
                ref={hamburgerButton}
            >
                <button
                    onClick={handleMenuButtonClick}
                    onAnimationEnd={handleAnimationEnd}
                    className={`block sm:hidden ml-auto text-3xl text-slate-200 ${
                        animation ? "animate-wiggle" : ""
                    }`}
                >
                    <GiHamburgerMenu />
                </button>
                <div
                    className={`${
                        isOpen ? "flex" : "hidden"
                    } animate-slideDown sm:flex w-full sm:w-auto sm:static absolute bg-slate-800 top-12 left-0 flex-col sm:flex-row gap-4 z-10 items-center pb-4 sm:pb-0`}
                >
                    {children}
                </div>
            </nav>
            {isOpen ? (
                <div className="bg-gray-500/25 absolute h-screen w-full top-12 left-0 z-20"></div>
            ) : (
                ""
            )}
        </>
    );
};

export default Navigation;
