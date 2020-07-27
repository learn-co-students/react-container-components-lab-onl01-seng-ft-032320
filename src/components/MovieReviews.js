import React from 'react'

const MovieReviews = ({reviews}) => 
      <div className="review-list">
         {reviews.map(review => 
            <div key={review.link.url} className="review">
               {review.byline} -- {review.display_title}
            </div>
         )}
      </div>


export default MovieReviews
