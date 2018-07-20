import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

class SearchPage extends Component{
	render() {
    	return (
        <div className="search-books">
                <SearchBar />
                <BookTable />
        </div> //<!-- search-books end -->
    	)
    }
}

export default SearchPage;