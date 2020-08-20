// Code MovieReviews Here
import React from 'react';


const Reviews = (reviews) => {
    return reviews.map((review, i) => {
         return (
             <li className="review" key={i} value={review}>
                 {review.display_title}
             </li>
         )
     })
 }
  
 const MovieReviews = ({reviews}) => 
 <div className="review-list">
     <ul className="reviews" >
         {Reviews(reviews)}
     </ul>
 </div>

export default MovieReviews;