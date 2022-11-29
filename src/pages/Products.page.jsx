import ProductList from "../components/molecules/ProductList";

import { useParams } from "react-router-dom";

const Products = () => {
    const { category } = useParams();

    return (
        <main className="mt-20 mb-20">
            <ProductList
                name={category}
                get={`${
                    import.meta.env.VITE_API_BASE_URL
                }/products/category/${category}`}
            />
        </main>
    );
};

export default Products;
