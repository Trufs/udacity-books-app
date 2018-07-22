import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class SearchPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery = (query) => {
    this.setState({query: query.trim() });
  }

	render() {

    	return (
        <div className="search-books">
          <SearchBar
            query = {this.state.query}
            onupdateQuery={this.updateQuery}
            />

          <div className="search-books-results">
            <BookTable query = {this.state.query} />
          </div>
         </div>
    	)
    }
}

export default SearchPage;