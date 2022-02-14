import React from 'react'
import styles from './ItemForm.module.css'

export const ItemForm = ({ createItem }) => {

  const handleCreateItem = (event) => {
    event.preventDefault();
    let itemFields = event.target
    const newItem = {
      name: itemFields.name.value,
      price: Number(itemFields.price.value),
      manufacturer: itemFields.manufacturer.value,
      category: itemFields.category.value,
      imageUrl: itemFields.image.value,
      description: itemFields.description.value
    }
    itemFields.name.value = "";
    itemFields.price.value = "";
    itemFields.manufacturer.value = "";
    itemFields.category.value = "";
    itemFields.image.value = "";
    itemFields.description.value = "";    
    createItem(newItem);
  }
  return (
    <div className={styles.ItemFormContainer}>
      <form onSubmit={handleCreateItem} className={styles.ItemForm}>
        <div className={styles.ItemFields}>
          <label>Name
            <input type="text" name="name"></input>
          </label>
          <label>Price
            <input type="text" name="price"></input>
          </label>
          <label>Manufacturer
            <input type="text" name="manufacturer"></input>
          </label>
          <label>Category
            <input type="text" name="category"></input>
          </label>
          <label>Image Url
            <input type="text" name="image"></input>
          </label>
        </div>
        <div className={styles.ItemDescription}>
          <label>Description</label>
          <textarea name="description"></textarea>
          <input type="submit" value="Create Item" />
        </div>
      </form>
    </div>
  )
}

export default ItemForm
