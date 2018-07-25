import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import BookDisplay from './BookDisplay';
import SearchPage from './SearchPage';
import './App.css';


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [], //books on shelves
      changed: false //take note if something changed on shelves
    }
    this.handleBookshelfChange = this.handleBookshelfChange.bind(this);
  }

  //get books that already are on shelves on initial render
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })
    }

  //fetch books again whenever a book changes shelf
  componentDidUpdate() {
    if (this.state.changed === true){
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      });
      //change state back
      this.setState({
        changed: false
      });
    }
  }

  //update state when a book changes shelf
  handleBookshelfChange() {
    console.log("I'm moved!");
    this.setState({
      changed: true
    });
  }

  render() {
    //set routes to pages, pass them books and callbacks to watch shelf change
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookDisplay
          books = {this.state.books}
          changed={this.state.changed}
          handleBookshelfChange={this.handleBookshelfChange}
          />
        )} />

        <Route path="/search" render={({ history }) => (
          <SearchPage
            booksOnShelf = {this.state.books}
            changed={this.state.changed}
            handleBookshelfChange={this.handleBookshelfChange}
            onSearchPage={() => {
            history.push('/');
            }}
            />
        )} />

      </div>
    )
  }
}  //end of component

export default BooksApp;
