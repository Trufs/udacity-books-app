import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Bookshelf from './Bookshelf';

class BookDisplay extends Component{
	render() {
    	return (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">

              <div>

                <Bookshelf title="Currently Reading" books={this.props.books}/>
                <Bookshelf title="Want to Read" books={this.props.books}/>
                <Bookshelf title="Read" books={this.props.books}/>

              </div>

            </div>

              <Link to="/search"><div className="open-search"></div></Link>

            </div>
    	)
    }
}

export default BookDisplay;