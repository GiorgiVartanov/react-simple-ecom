import Card from "../atoms/Card";
import Button from "../atoms/Button";

import { AiFillStar } from "react-icons/ai";
import {
    FaSearch,
    FaShoppingCart,
    FaHeart,
    FaHeartBroken,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import { useOnClickOutside } from "../../hooks/useOnOutsideClick";

const ProductCard = ({ id, title, image, price, rating }) => {
    const [isActive, setIsActive] = useState(false);

    const buttonRef = useRef();

    const handleSetActive = () => {
        setIsActive(true);
    };

    const handleClickOutside = () => {
        setIsActive(false);
    };

    const handleAddToCart = () => {
        console.log("adding to the cart");
    };

    const handleAddToFavorites = () => {
        console.log("adding to the favorites");
    };

    useOnClickOutside(buttonRef, handleClickOutside);

    return (
        <Card
            ref={buttonRef}
            onClick={handleSetActive}
        >
            <img
                className="object-contain sm:h-96 transition-all ease-out delay-75 duration-200"
                src={image}
                alt={title}
            />

            <div className="flex flex-row justify-between items-center gap-5">
                <h2 className="text-md text-stale-800">{title}</h2>
                <div className="">
                    <p className="text-md text-slate-800 whitespace-nowrap">
                        {price} $
                    </p>
                    <p className="text-sm whitespace-nowrap flex flex-row items-center gap-0.5">
                        {rating.rate} / 5 <AiFillStar />
                    </p>
                </div>
            </div>
            {isActive ? (
                <div className="grid place-content-center absolute top-0 left-0 h-full w-full bg-slate-500/25">
                    <div className="flex flex-row gap-2 bg-slate-800 px-3 py-2 shadow-md text-lg md:text-xl">
                        <Link to={`../${id}`}>
                            <FaSearch className="text-slate-200 hover:text-slate-300 transition-all ease-in delay-75 duration-200" />
                        </Link>
                        <button onClick={handleAddToCart}>
                            <FaShoppingCart className="text-slate-200 hover:text-slate-300 transition-all ease-in delay-75 duration-200" />
                        </button>
                        <button onClick={handleAddToFavorites}>
                            <FaHeart className="text-slate-200 hover:text-slate-300 transition-all ease-in delay-75 duration-200" />
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </Card>
    );
};

export default ProductCard;
