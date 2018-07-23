import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';

class BookDisplay extends Component{
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
	      this.setState({ books: books })
	      console.log(books);
	    })
    }

	render() {
    	return (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">

              <div>

                <Bookshelf title="Currently Reading" shelf="currentlyReading" books={this.state.books}/>
                <Bookshelf title="Want to Read" shelf="wantToRead" books={this.state.books}/>
                <Bookshelf title="Read" shelf="read" books={this.state.books}/>

              </div>

            </div>

              <Link to="/search"><div className="open-search"></div></Link>

            </div>
    	)
    }
}

export default BookDisplay;