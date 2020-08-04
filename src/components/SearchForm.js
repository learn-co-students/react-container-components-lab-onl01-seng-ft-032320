import React from 'react'

const SearchForm = (props) =>{
    return(
        <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>
                    Enter a Search Term
                    <input id="search" type="text" onChange={this.handleSearchInputChange}/>
                </label>
            </div>
            <div>
                <button type="submit">Find Reviews</button>
            </div>
        </form>
    </div>
    )
}

export default SearchForm

