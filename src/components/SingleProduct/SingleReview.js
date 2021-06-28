import React from "react";
import starsIcon from "../../icons/stars.svg";
import reviewerImage from "../../images/reviewer.png";

const SingleReview = () => {
  return (
    <div>
      <div className="flex items-center">
        <img src={starsIcon} alt="review stars" />
        <p className="px-1">3.0</p>
      </div>
      <div>
        <p className="review-text">
          This is the best product I have used in a long while and the size fits
          perfectly and I love the colors!!!!!
        </p>
      </div>
      <div className="flex items-center">
        <img src={reviewerImage} alt="reviewer" />
        <p className="px-1">Segun Arinze</p>
      </div>
    </div>
  );
};

export default SingleReview;
