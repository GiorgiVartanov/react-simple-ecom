import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RatingStars = ({ rating, maxRating }) => {
    const renderStars = () => {
        const stars = [];
        const roundedRating = Math.round(rating * 2) / 2;

        for (let i = roundedRating; i > 0; i--) {
            if (i >= 1) stars.push(<BsStarFill key={i} />);
            else stars.push(<BsStarHalf key={i} />);
        }

        const emptyStars = maxRating - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<BsStar key={i + "hs"} />);
        }

        return stars;
    };

    return <div className="flex flex-row text-slate-800">{renderStars()}</div>;
};

export default RatingStars;
