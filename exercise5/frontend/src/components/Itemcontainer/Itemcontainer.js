import React from 'react'
import Item from '../Item/Item'
import styles from './Itemcontainer.module.css'

const Itemcontainer = ({ items }) => {
    return(
        <div className={styles.Itemcontainer}>
            {items.map(i => <Item key={i.id} item={i}/>)}
        </div>
    )
}

export default Itemcontainer;