import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class SearchPage extends Component{
	render() {
    	return (
        <div className="search-books">
          <SearchBar />


          <div className="search-books-results">
            <BookTable />
          </div>
         </div>
    	)
    }
}

export default SearchPage;