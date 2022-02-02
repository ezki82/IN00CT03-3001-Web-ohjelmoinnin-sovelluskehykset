import React from 'react'
import styles from './Item.module.css'

const Item = ({ item }) => {
    return(
        <div className={styles.Item}>
            <img src={item.imgSrc} alt={item.imgSrc} className={styles.Img} />
            <h1>{item.name}</h1>
            <h2>By {item.brand}</h2>
            <h2>{item.price.toFixed(2)}$</h2>
            <h3>Stars: {item.stars} ^ {item.reviews}</h3>
        </div>
    )
}

export default Item;