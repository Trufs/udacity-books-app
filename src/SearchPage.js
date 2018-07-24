import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import BookTable from './BookTable';


class SearchPage extends Component{
  state = {
        query: '', //this is changed based on SearchBar component
        books:[] //books matching the query
  }

  //fetch books matching the query
  updateQuery = (query) => {
    this.setState({query: query });
    BooksAPI.search(this.state.query).then((books) => {
      this.setState({ books: books });
    })
  }

	render() {
    //compare fetched books with books already on shelves, if a book is on shelf, note it in its data
    let bookToShow;
    let showingBooks = [];
    let booksOnShelf = this.props.booksOnShelf;
    let booksFound = this.state.books;
    if (Array.isArray(booksFound) && Array.isArray(booksOnShelf) ){
      booksFound.map((bookFound) => {
        bookToShow = bookFound;
        booksOnShelf.map((bookOnShelf) => {
          if (bookFound.id === bookOnShelf.id){
            bookToShow = bookOnShelf;
          }
        })
        showingBooks.push(bookToShow);
      })
    }

    //display search page
  	return (
      <div className="search-books">

        <SearchBar query = {this.state.query} onupdateQuery={this.updateQuery} />

        <div className="search-books-results">
          { //check if there's an array to pass, if so, pass it
            Array.isArray(showingBooks) &&
            <BookTable books={showingBooks}
              changed={this.props.changed}
              handleBookshelfChange={this.props.handleBookshelfChange}
            />
          }
        </div>

      </div>
  	)
  }
}  //end of component

export default SearchPage;