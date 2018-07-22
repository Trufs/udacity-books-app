import React, { Component } from 'react';
import Book from './Book';


class BookTable extends Component{
  constructor(props) {
    super(props);
    }

  render() {

    	return (
        <div>
        <ol className="books-grid">
         {this.props.books !== undefined && this.props.books.map ((book) => (
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
