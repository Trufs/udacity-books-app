import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class SearchPage extends Component{
	render() {
    	return (
        <div className="search-books">
                <SearchBar />
                <BookTable />
        </div>
    	)
    }
}

export default SearchPage;