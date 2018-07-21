import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import BookDisplay from './BookDisplay';
import SearchPage from './SearchPage';
import './App.css';


class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (

      <div className="app">

        <Route exact path="/" render={() => (
          <BookDisplay
          books={this.state.books}
          />
        )} />

        <Route path="/search" render={({ history }) => (
          <SearchPage
            books={this.state.books}
            onSearchPage={() => {
            history.push('/');
          }}
            />
          )}
         />

      </div>

    )
  }
}

export default BooksApp;
