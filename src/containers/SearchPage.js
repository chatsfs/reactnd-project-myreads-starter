import React from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

class SearchPage extends React.Component {
    state = {
        query: ''
    }
    updateQuery = query => {
        this.setState({ query: query.trim() })
    }
    clearQuery = _ => {
        this.setState({ query: '' })
    }
    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>)
    }
}

export default SearchPage