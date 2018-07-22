import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import BookTable from './BookTable';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';


class SearchPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books:[]
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery = (query) => {
    console.log(query);
    this.setState({query: query });
    BooksAPI.search(this.state.query).then((books) => {
      this.setState({ books: books })
    })
    console.log(this.state.query);
    console.log(this.state.books);
  }



	render() {

    	return (
        <div className="search-books">
          <SearchBar
            query = {this.state.query}
            onupdateQuery={this.updateQuery}
            />

          <div className="search-books-results">
          {Array.isArray(this.state.books) &&
            <BookTable books={this.state.books} />

          }
          </div>
         </div>
    	)
    }
}

export default SearchPage;