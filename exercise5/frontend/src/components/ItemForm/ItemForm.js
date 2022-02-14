import React from 'react'
import styles from './ItemForm.module.css'

export const ItemForm = () => {

  const handleCreateItem = (event) => {
    event.preventDefault();
    const newItem = {
      name: event.target.name.value,
      price: Number(event.target.price.value),
      manufacturer: event.target.manufacturer.value,
      category: event.target.category.value,
      imageUrl: event.target.image.value,
      description: event.target.description.value
    }
    console.log(newItem);
  }
  return (
    <form className={styles.ItemForm} onSubmit={handleCreateItem}>
      <div className={styles.ItemFields}>
        <label className={styles.ItemField}>Name
          <input type="text" name="name"></input>
        </label>
        <label className={styles.ItemField}>Price
          <input type="text" name="price"></input>
        </label>
        <label className={styles.ItemField}>Manufacturer
          <input type="text" name="manufacturer"></input>
        </label>
        <label className={styles.ItemField}>Category
          <input type="text" name="category"></input>
        </label>
        <label className={styles.ItemField}>Image Url
          <input type="text" name="image"></input>
        </label>
        <input type="submit" value="Create Item" />
      </div>
      <div className={styles.TextArea}>
        <label>Description</label>
        <textarea name="description" rows="10" ></textarea>
      </div>
    </form>
  )
}

export default ItemForm
