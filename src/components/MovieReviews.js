// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(r => <div className="review">{r.display_title}: {r.summary_short}</div>)}</div>



export default MovieReviews;