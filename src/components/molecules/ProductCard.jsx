import Card from "../atoms/Card";

import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ id, title, image, price, rating }) => {
    return (
        <Card to={`../${id}`}>
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
        </Card>
    );
};

export default ProductCard;
