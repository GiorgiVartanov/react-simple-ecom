const Button = ({ onClick, className, children }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-slate-800 text-slate-100 pl-2 pr-2 pt-1 pb-1 transition-all shadow-sm  ease-out delay-75 duration-200 hover:shadow-lg hover:bg-slate-900 active:shadow-lg ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
