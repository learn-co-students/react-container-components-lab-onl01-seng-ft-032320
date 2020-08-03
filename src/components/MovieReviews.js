import React from 'react'

const DisplayReviews = (reviews) => {
   return reviews.map((review, i) => {
        return (
            <li className="review" key={i} value={review}>
                {review.display_title}
            </li>
        )
    })
}
// This component deconstructs each object and returns certain properties in tags and can then be mapped over to redner each one - {reviews.map(DisplayReview)}

// const DisplayReview = ({ headline, critics_pick, link, byline, summary_short }) => {
//     return (
//         <div className="review" key={headline}>
//             <header>
//                 <link rel="stylesheet" href={link.url}/>
//                 {headline}
//                 <h4>
//                     {byline}
//                 </h4>
//             </header>
//             <blockquote>
//                 {summary_short}
//             </blockquote>
//         </div>
//     )
// }

const MovieReviews = ({reviews}) => 
    <div className="review-list">
        <ul className="reviews" >
            {DisplayReviews(reviews)}
        </ul>
    </div>

export default MovieReviews