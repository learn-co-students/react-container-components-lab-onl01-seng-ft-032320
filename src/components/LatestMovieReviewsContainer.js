import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=fbuBsyzkH8A9CnXlEB2jNcHnLAysEtIW")
            .then(res => res.json())
            .then(({ results }) => {
                this.setState({ reviews: results.map(review => review) })
            })
    }
}
