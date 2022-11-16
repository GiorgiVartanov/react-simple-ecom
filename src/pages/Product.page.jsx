import Button from "../components/atoms/Button";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Product = () => {
    const { id } = useParams();

    const { isLoading, error, data } = useQuery([`product-${id}`], () =>
        Axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`).then(
            (res) => res.data
        )
    );

    const handleAddToCart = () => {
        console.log(`adding item with id ${id} to cart`);
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <main className="flex flex-col md:flex-row max-w-5xl m-auto gap-8 pl-4 pr-4 mt-20 font-poppins">
            <img
                className="max-w-lg h-full w-full m-auto md:m-0"
                src={data.image}
                alt={data.title}
            />
            <div className="flex flex-col gap-2.5 my-2">
                <h2 className="text-xl">{data.title}</h2>
                <p>{data.description}</p>
                <p>
                    <span className="">price : </span>
                    {data.price} $
                </p>
                <p>{data.rating.rate}</p>
                <p>{data.rating.count}</p>
                <div className="flex items-center gap-2 mt-2">
                    <Button
                        onClick={handleAddToCart}
                        className=""
                    >
                        add to cart
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default Product;
