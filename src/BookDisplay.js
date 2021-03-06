import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';

class BookDisplay extends Component{
	render() {
		//display the main page
  	return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading"
              shelf="currentlyReading"
              books={this.props.books}
              changed={this.props.changed}
		          handleBookshelfChange={this.props.handleBookshelfChange}
	          />
            <Bookshelf title="Want to Read"
              shelf="wantToRead"
              books={this.props.books}
              changed={this.props.changed}
		          handleBookshelfChange={this.props.handleBookshelfChange}
	          />
            <Bookshelf title="Read"
              shelf="read"
              books={this.props.books}
              changed={this.props.changed}
		          handleBookshelfChange={this.props.handleBookshelfChange}
	          />
          </div>
        </div>

        <Link to="/search"><div className="open-search"></div></Link>

      </div>
  	)
  }
}  //end of component

export default BookDisplay;