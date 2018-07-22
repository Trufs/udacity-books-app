import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class BookTable extends Component{
  constructor(props) {
    super(props);
    }

  static propTypes = {
    books: PropTypes.array
  }

  render() {

    	return (
        <div>
        <ol className="books-grid">
         {this.props.books.map ((book) => (
          <li key={book.id}>
            <Book book={ book }/>
          </li>
          ))
        }
        </ol>
        </div>
    	)
    }
}

export default BookTable;
