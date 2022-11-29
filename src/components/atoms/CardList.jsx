const CardList = ({ id, className, children }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-fit m-auto mt-4 sm:pl-3 sm:pr-3 pl-0 pr-0">
            {children}
        </div>
    );
};

export default CardList;
