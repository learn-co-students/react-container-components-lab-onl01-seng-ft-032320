import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  updateSearch = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL + `&query=${this.searchTerm}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({ reviews: data.results })
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.updateSearch}/> 
          <button type="submit"> Search </button>
        </form> <br/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;

