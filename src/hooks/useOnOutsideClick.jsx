import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
    // ref - ref of thing we need to detect outside click from
    // handler - function that will run on click outside

    const handleClickOutside = (event) => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [ref, handler]);
};
