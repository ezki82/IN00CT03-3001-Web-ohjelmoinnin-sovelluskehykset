import React from 'react'
import styles from './Item.module.css'

const Item = ({ item, adminMode, deleteItem }) => {

    const deleteThisItem = () => {
        deleteItem(item);
    } 
    return(
        <div className={styles.Item}>
            <img src={item.imageUrl} alt={item.name} className={styles.Img} />
            <h1>{item.name}</h1>
            <h2>By {item.manufacturer}</h2>
            <h2>{item.price.toFixed(2)}$</h2>
            <p>{item.description}</p>
            { adminMode ? <button onClick={deleteThisItem}>Delete</button> : <></>}
        </div>
    )
}

export default Item;