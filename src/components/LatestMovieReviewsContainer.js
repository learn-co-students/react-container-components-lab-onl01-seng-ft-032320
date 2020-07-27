import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6TJjDGFmPRroAIp061QfrABxqpHpHseO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

   state = {
      reviews: []
   }

   componentDidMount(){
      this.getReviews()
   }

   getReviews = () => {
      fetch(URL)
      .then(r => r.json())
      .then(reviews => this.setState({
            reviews: reviews.results
         }))
   }

   render() {
      let latestReviews = this.state.reviews

      return (
         <div className="latest-movie-reviews">
            <h3>Latest Reviews</h3>
            <MovieReviews reviews={latestReviews} />
         </div>
      )
   }
}

export default LatestMovieReviewsContainer