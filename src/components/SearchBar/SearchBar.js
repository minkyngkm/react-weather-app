import React from 'react'
import './SearchBar.css'

export function SearchBar({searchTerm, search, changeHandler}) {
    return (
        <div className="search-box">
            <input
                className="search-bar"
                placeholder="Search..."
                type='text'
                value={searchTerm}
                onChange={changeHandler}
                onKeyPress={search}
            />
        </div>
    )
}
