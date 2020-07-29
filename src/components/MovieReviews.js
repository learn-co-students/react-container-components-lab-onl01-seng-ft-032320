// Code MovieReviews Here
import React from 'react';

const reviewElements = ({
  headline,
  byline, 
  link,
  summary_short
}) => {
  return (
    <div key={headline} className="review">
      <h3><a href={link.url}>{headline}</a></h3>
      <h4>{byline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(reviewElements)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
