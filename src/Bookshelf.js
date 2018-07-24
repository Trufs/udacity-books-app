import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component{

	render() {
    //filter books that belong to this shelf
    let showingBooks;
    if (this.props.books) {
       showingBooks = this.props.books.filter((book) => (book.shelf === this.props.shelf));
       console.log(this.props.books)
       console.log(showingBooks);
    }

  	return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>

        <div className="bookshelf-books">

          <ol className="books-grid">
          {//pass data of each book to Book component
            showingBooks.map ((book) => (
            <li key={book.id}>
              <Book book={ book }/>
            </li>
            ))
          }
          </ol>

        </div>
      </div>
  	)
  }
}  //end of component

export default Bookshelf;
