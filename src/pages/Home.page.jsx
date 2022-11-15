import ProductList from "../components/molecules/ProductList";

const Home = () => {
    return (
        <main className="mt-20">
            <ProductList
                name="allProducts"
                get={`${import.meta.env.VITE_API_BASE_URL}/products`}
            />
        </main>
    );
};

export default Home;
