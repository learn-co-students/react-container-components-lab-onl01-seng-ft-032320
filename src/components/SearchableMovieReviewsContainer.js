import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{

    state={
        reviews: [],
        searchTerm: ""
    }


    searchT = (event)=>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    getReviews = (event)=>{
         event.preventDefault()
        fetch(URL+`&query=<${this.state.searchTerm}>`)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews: data.results
        }))
         
    }




    render(){
        return (<div>
        <form onSubmit={this.getReviews}> <input type="text" onChange={this.searchT} value={this.state.searchTerm}/> <button type="submit">Submit</button>
        </form>
        {<MovieReviews reviews={this.state.reviews}/>}</div>)
    }
}

export default SearchableMovieReviewsContainer;
