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

    // console.log(data);

    if (isLoading) return <p>Loading...</p>;

    return (
        <main className="flex flex-col md:flex-row max-w-5xl m-auto gap-8 pl-2 pr-2 mt-20">
            <img
                className="max-w-lg"
                src={data.image}
                alt={data.title}
            />
            <div className="flex flex-col gap-2.5">
                <h2 className="text-xl">{data.title}</h2>
                <p>{data.description}</p>
                <p>{data.rating.rate}</p>
                <p>{data.rating.count}</p>
            </div>
        </main>
    );
};

export default Product;
