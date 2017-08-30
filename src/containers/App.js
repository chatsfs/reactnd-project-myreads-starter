import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import MainShelf from './MainShelf'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'

import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: true,
    books:[],
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {this.setState({books})})
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={_ => (
          <MainShelf books={this.state.books}/>
        )}/>
        <Route path="/search" render={({history})=>(
          <SearchPage/>
        )}/>
          
       
         
        
      </div>
    )
  }
}

export default BooksApp
