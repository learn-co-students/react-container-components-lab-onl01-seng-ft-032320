// Code MovieReviews Here
import React from 'react';

function MovieReviews(props) {
    const movieReviews = props.reviews.map(review => {
        return <div key={review.headline} className="review">
            <header>
                <a className="review-link" href={review.link.url}>
                    {review.headline}
                </a>
            </header>
            <blockquote>{review.summary_short}</blockquote>
        </div>
    })

    return (
        <div className='review-list'>
            {movieReviews}
        </div>
    )

}

export default MovieReviews;
