import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = (event) => {
    event.persist();
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          reviews: json.results
        })
      })
  }

  handleChange = (event) => {
    event.persist();
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input name="searchTerm" onChange={this.handleChange} type="text" value={this.state.searchTerm} />
          <input type="submit" value="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
