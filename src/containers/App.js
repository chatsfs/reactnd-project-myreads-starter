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
  componentDidMount=_=> {
    BooksAPI.getAll().then(books => {this.setState({books})})
  }
  updateBook= (book,shelf) =>{
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }
  searchBook= query=>{
    BooksAPI.search()
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={_ => (
          <MainShelf books={this.state.books} onUpdateBook={this.updateBook}/>
        )}/>
        <Route path="/search" render={({history})=>(
          <SearchPage booksOnShelf={this.state.books} onMove={this.updateBook} searchResult={this.state.searchResult} />
        )}/>
          
       
         
        
      </div>
    )
  }
}

export default BooksApp
