import React from 'react'
import styles from './Searchbar.module.css'

const Searchbar = ({searchOnChange}) => {
    const handleChange = (event) => {
        searchOnChange(event.target.value)
    }
    return(
        <div className={styles.Searchbar}>
            <h1>Type search phrase to filter items</h1>
            <input onChange={handleChange} type="text"/>
        </div>
    )
}

export default Searchbar;