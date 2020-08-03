// Code MovieReviews Here
import React from 'react'



const MovieReviews = ({reviews}) =>  
    // console.log(reviews)
    // return (
        <div className='review-list'>
            {reviews.map((movie) => <div className='review' >{movie.display_title}</div>)}
        </div>
    // )
// }


export default MovieReviews