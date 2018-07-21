import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import BookDisplay from './BookDisplay';
import SearchPage from './SearchPage';
import './App.css';


class BooksApp extends React.Component {
  state = {
    books:[
    {id:1, title: "Humming Board", authors: "El Commandore", url: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"},
    {id:2, title:"Octopuses' Crown", authors: "Bun, Bean", url: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"}
    ]
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
