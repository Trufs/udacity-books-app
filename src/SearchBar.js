import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SearchBar extends Component{
	  constructor(props) {
	    super(props);
	    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.props.onupdateQuery(e.target.value);
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
              		value = {this.props.query}
        					onChange = {this.updateQuery}
					/>
              </div>
            </div>

    	)
    }
}

export default SearchBar;







