import React from 'react'
import styles from './SearchBar.module.css'

export function SearchBar({searchTerm, search, changeHandler}) {
    return (
        <div className={styles.searchBox}>
            <input
                className={styles.searchBar}
                placeholder="Search..."
                type='text'
                value={searchTerm}
                onChange={changeHandler}
                onKeyPress={search}
            />
        </div>
    )
}
