import React from "react";
import PropTypes from "prop-types";





const Rate = ({ count, rating, color, onRating }) => {
  const starRating = useMemo(
    () => {
      return Array(count)
        .fill(0)
        .map((_, i) => i + 1)
        .map((idx) => {
          <FontAwesomeIcon
            key={idx}
            className="cursor-pointer"
            icon="star"
            onClick={() => onRating(idx)}
          />;
        });
    },
    { count, rating }
  );

  return <div>{starRating}</div>;
};

Rate.prototype = {
  count: PropTypes.number,
  rating: PropTypesnumber,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#F5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default Rate;
