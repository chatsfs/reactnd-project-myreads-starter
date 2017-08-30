import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainShelf extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf onMove={this.props.onUpdateBook} books={this.props.books.filter(book => book.shelf === "currentlyReading")} title="Currently Reading" />
                        <BookShelf onMove={this.props.onUpdateBook} books={this.props.books.filter(book => book.shelf === "wantToRead")} title="Want to read" />
                        <BookShelf onMove={this.props.onUpdateBook} books={this.props.books.filter(book => book.shelf === "read")} title="Read" />
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