const CardList = ({ id, className, children }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl m-auto mt-4 pl-3 pr-3">
            {children}
        </div>
    );
};

export default CardList;
