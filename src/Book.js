import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component{
  constructor(props) {
    super(props);
    if(this.props.book.shelf){
      this.state = {value: this.props.book.shelf};  //book is already on a shelf
    } else {
      this.state = {value: "none"};  //book is not added to library yet
    }
  }

  //handle shelf changes: update backend, call function passed from parent
  shelfChange = (evt) => {
    this.setState({value: evt.target.value});
    BooksAPI.update(this.props.book, evt.target.value).then((response) => {
      console.log(response);
    this.props.handleBookshelfChange();
    })
  }

	render() {
    const { id, title, authors, imageLinks } = this.props.book;
    //display the book with correct data
    return (
  		<div className="book">
        <div>

          <div className="book-top">

          {
            imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${imageLinks.thumbnail}` }}></div>
          }
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

          {
            title && <div className="book-title">{title}</div>
          }
          {
            authors && <div className="book-authors">{authors}</div>
          }

        </div>
      </div>

  	)
  }
} //end of component

export default Book;