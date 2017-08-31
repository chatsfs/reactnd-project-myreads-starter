import React from 'react'
import * as BooksAPI from '../api/BooksAPI'
import { Link } from 'react-router-dom'

class SearchPage extends React.Component {
    state = {
        query: '',
        books: [],
    }
    updateQuery = query => {
        if (!query) {
            this.setState({ query: '', books: [] })
        } else {
            this.setState({ query: query.trim() })
            BooksAPI.search(query).then(books => {
                if (books.error) {
                    books = []
                  }
                  books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                  this.setState({books})
            })
        }
    }
    clearQuery = _ => {
        this.setState({ query: '' })
    }
    updateBook = (id,shelf) =>{
        this.props.onMove(id,shelf);
    }
    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={e => this.updateQuery(e.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={e => this.updateBook(book, e.target.value)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>)
    }
}

export default SearchPage