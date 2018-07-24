import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component{
  constructor(props) {
    super(props);
    if(this.props.book.shelf){
      this.state = {value: this.props.book.shelf};
    } else {
      this.state = {value: "none"};
    }
  }

  //handle shelf changes
  shelfChange = (evt) => {
    this.setState({value: evt.target.value});
    BooksAPI.update(this.props.book, evt.target.value).then((response) => {
      console.log(response);
    this.props.handleBookshelfChange();
    })
  }

	render() {
    const { id, title, authors, imageLinks } = this.props.book;

    return (
  		<div className="book">

      {
        // (imageLinks !== undefined) && (
        <div>

          <div className="book-top">

            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${imageLinks.thumbnail}` }}>
            </div>

              <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.shelfChange}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
          </div>

          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>

        </div>
      // )
  }
        </div>

  	)
  }
} //end of component

export default Book;