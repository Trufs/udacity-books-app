import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import Book from './Book';


class BookTable extends Component{
  static propTypes = { //make sure prop is of the correct type
    books: PropTypes.array
  }

  render() {

    //display books matching the query
  	return (
      <div>

        <ol className="books-grid">
          {//pass data of each book to Book component
            this.props.books.map ((book) => (
            <li key={book.id}>
              <Book book={ book }/>
            </li>
            ))
          }
        </ol>

      </div>
  	)
  }
} //end of component

export default BookTable;
