import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import BookDisplay from './BookDisplay';
import SearchPage from './SearchPage';
import './App.css';


class BooksApp extends React.Component {
  state = {
    books: [] //books on shelves
  }

  //get books that already are on shelves
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
      })
    }

  render() {

    //set routes to pages, pass them books
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookDisplay
          books = {this.state.books}
          />
        )} />

        <Route path="/search" render={({ history }) => (
          <SearchPage
            booksOnShelf = {this.state.books}
            onSearchPage={() => {
            history.push('/');
          }}
            />
          )}
         />

      </div>
    )
  }
}  //end of component

export default BooksApp;
