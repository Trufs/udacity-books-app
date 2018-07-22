import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookTable extends Component{

  state = {
    books: []
  }

   componentDidMount() {
    console.log(this.props.query);
    BooksAPI.search(this.props.query).then((books) => {
      this.setState({ books })
    })
  }

  render() {

    // let showingBooks;
    // if (query) {
    //    const match = new RegExp(escapeRegExp(query), 'i');
    //    showingBooks = books.filter((book) => match.test(book.title || book.authors));
    // } else {
    //   showingBooks = books;
    // }

    // showingBooks.sort(sortBy('name'));

    	return (

              <ol className="books-grid">
              </ol>
    	)
    }
}

export default BookTable;
