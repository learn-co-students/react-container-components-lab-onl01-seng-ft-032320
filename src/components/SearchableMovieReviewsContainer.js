import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
             + `api-key=${NYT_API_KEY}&` + `query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

   state = {
      reviews: [],
      searchTerm: ""
   }

   searchReviews = () => {
      fetch(URL+this.state.searchTerm)
      .then(r => r.json())
      .then(reviews => this.setState({
         reviews: reviews.results
      }))

   }
   
   handleChange = (e) => this.setState({
      [e.target.name]: e.target.value
   })

   handleSubmit = (e) => {
      e.preventDefault()
      this.searchReviews()
   }

   render() {
      let searchResults = this.state.reviews
      return (
         <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
               <input 
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                  type="text"/>
               <input type="submit"/>
            </form>
         
         {searchResults.length > 1 ? <h3>Search Results for {this.state.searchTerm}</h3> : ""}
         <MovieReviews reviews={searchResults}/>
         
         </div>
      )
   }
}