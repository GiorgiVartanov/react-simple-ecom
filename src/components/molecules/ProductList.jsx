import CardList from "../atoms/CardList";
import ProductCard from "./ProductCard";

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const ProductList = ({ get, name }) => {
    const { isLoading, error, data } = useQuery([name], () =>
        Axios.get(get).then((res) => res.data)
    );

    const renderProducts = () => {
        return data.map((product) => (
            <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
            ></ProductCard>
        ));
    };

    if (isLoading) return <div>...Loading</div>;

    return <CardList>{renderProducts()}</CardList>;
};

export default ProductList;
