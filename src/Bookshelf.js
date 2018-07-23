import React, { Component } from 'react';
import Book from './Book';
import BookShelfChanger from './BookShelfChanger';

class Bookshelf extends Component{


	render() {

    let showingBooks;
    if (this.props.books) {
       showingBooks = this.props.books.filter((book) => (book.shelf === this.props.shelf));
       console.log(this.props.books)
       console.log(showingBooks);
    }

    // showingBooks.sort(sortBy('name'));

    	return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>

          <div className="bookshelf-books">

            <ol className="books-grid">
            {showingBooks.map ((book) => (
              <li key={book.id}>
                <Book book={ book }/>
              </li>
              ))}
            </ol>

          </div>
        </div>
    	)
    }
}

export default Bookshelf;
