import React from 'react'

const DisplayReviews = (reviews) => {
    return reviews.map((review, i) => {
        return <li key={i} className="review">
                {review.display_title}
               </li>
 })}

const MovieReviews = ({reviews}) =>
    <div className="review-list">
        <ul>
            {DisplayReviews(reviews)}
        </ul>
    </div>

export default MovieReviews
