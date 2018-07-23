import React, { Component } from 'react';

class BookShelfChanger extends Component{
	constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	handleChange(e) {
	this.props.onhandleChange(e.target.value);
	}

	render() {
    	return (
	        <div className="book-shelf-changer">
	          <select value={this.props.shelf} onChange={this.handleChange}>
	            <option value="move" disabled>Move to...</option>
	            <option value="currentlyReading">Currently Reading</option>
	            <option value="wantToRead">Want to Read</option>
	            <option value="read">Read</option>
	            <option value="none">None</option>
	          </select>
	        </div>
        )
    }
}

export default BookShelfChanger;
