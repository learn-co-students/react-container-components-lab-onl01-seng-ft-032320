import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=fbuBsyzkH8A9CnXlEB2jNcHnLAysEtIW&query=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(reviews => this.setState({ reviews: reviews.results }))

    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form className="form" id="addItemForm"
                    onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="searchTerm" onChange={event => this.handleChange(event)} />
                    <button className="button">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}