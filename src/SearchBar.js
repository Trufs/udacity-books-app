import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SearchBar extends Component{

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim() });
		console.log(query);
	}

	render() {
    	return (

            <div className="search-books-bar">
              <Link to="/">
              <div className="close-search"></div>
              </Link>

              <div className="search-books-input-wrapper">

                <input type="text"
	                placeholder="Search by title or author"
            		value = {this.state.query}
					onChange = {(event) => this.updateQuery(event.target.value)}
					/>
              </div>
            </div>

    	)
    }
}

export default SearchBar;







