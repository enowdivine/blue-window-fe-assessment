import "../styles/components/Ratings.css";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai"; // importing react icon

/**
 *This is the rating component and ratings can be set by hovering over the stars icon and selecting the required rate.
 * The select rate is displayed directly below the the stars icon.
 */
const StarRating = () => {
  const [rating, setRating] = useState(4.5);
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
