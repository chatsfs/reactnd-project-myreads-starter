import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainShelf extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.props.books.filter(book => book.shelf === "currentlyReading")} title="Currently Reading" />
                        <BookShelf books={this.props.books.filter(book => book.shelf === "wantToRead")} title="Want to read" />
                        <BookShelf books={this.props.books.filter(book => book.shelf === "read")} title="Read" />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainShelf;