import "../styles/components/Ratings.css";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {/* <span className="star">&#9733;</span> */}
            <span className="stars">
              <AiFillStar className="star-icon" />
            </span>
          </button>
        );
      })}
      <div className="rating-value">{rating}/5</div>
    </div>
  );
};

export default StarRating;
