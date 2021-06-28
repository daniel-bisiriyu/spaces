import React from "react";
import starsIcon from "../../icons/stars.svg";
import reviewerImage from "../../images/reviewer.png";

const SingleReview = () => {
  return (
    <div>
      <div>
        <img src={starsIcon} alt="review stars" />
        <p>3.0</p>
      </div>
      <div>
        <p>
          This is the best product I have used in a long while and the size fits
          perfectly and I love the colors!!!!!
        </p>
      </div>
      <div>
        <img src={reviewerImage} alt="reviewer" />
        <p>Segun Arinze</p>
      </div>
    </div>
  );
};

export default SingleReview;
