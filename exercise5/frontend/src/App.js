import React, { useState, useEffect } from "react";
import axios from "axios";
import Itemcontainer from './components/Itemcontainer/Itemcontainer'
import Searchbar from './components/Searchbar/Searchbar'
import ItemForm from './components/ItemForm/ItemForm'
import styles from './App.module.css'

const App = () => {

  const [adminMode, setAdminMode] = useState(false);
  const [items, setItems] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')  

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('http://localhost:3001/products');
      setItems(response.data);
    }
    getItems();
  }, [])

  const handleAdminModeChange = () => {
    setAdminMode(!adminMode);
  }

  const searchOnChange = (phrase) => {
    setSearchPhrase(phrase);
  }

  const handleDeleteItem = async (item) => {
    if (!window.confirm(`Are you sure you want to delete ${item.name}`)) {
      return;
    } 
    const response = await axios.delete(`http://localhost:3001/products/${item.id}`);
    setItems(items.filter(i => i.id !== response.data.id))
  }

  const handleCreateItem = async (item) => {
    const response = await axios.post(`http://localhost:3001/products`, item);
    setItems(items.concat(response.data));
  }

  const filteredItems = searchPhrase.length !== 0 ? items.filter(i => {
    const searchString = i.name + i.manufacturer + i.description + i.category;
    return searchString.toLowerCase().includes(searchPhrase)
  }) : items;

  return (
  <div className={styles.App}>
    <button onClick={handleAdminModeChange} className={styles.AdminButton}>{adminMode ? "Toggle Admin Mode OFF" : "Toggle Admin Mode ON"}</button>
    <Searchbar searchOnChange={searchOnChange}/>
    {adminMode ? <ItemForm createItem={handleCreateItem}/> : <></>}
    <Itemcontainer items={filteredItems} adminMode={adminMode} deleteItem={handleDeleteItem}/>
  </div>
  );
};

export default App;