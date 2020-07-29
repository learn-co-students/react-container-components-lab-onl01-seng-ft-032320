import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super() 
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value });

    handleSubmit = (e) => {
        e.preventDefault() 
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({reviews: json.results.slice(0, 3)})
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input id="searrch-input" type="text" style={{ width: 300 }} onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                </form>
                {typeof this.state.reviews === "object" && this.state.reviews.length > 0 && <h2>Movie Revies By Search</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
