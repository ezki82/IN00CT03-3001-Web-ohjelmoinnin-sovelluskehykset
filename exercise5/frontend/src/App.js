import React, { useState, useEffect } from "react";
import axios from "axios";
import Itemcontainer from './components/Itemcontainer/Itemcontainer'
import Searchbar from './components/Searchbar/Searchbar'
import styles from './App.module.css'

const App = () => {

  const [items, setItems] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')  

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('http://localhost:3001/products');
      console.log(response.data);
      setItems(response.data);
    }
    getItems();
  }, [])

  const searchOnChange = (phrase) => {
    setSearchPhrase(phrase);
  }

  const filteredItems = searchPhrase.length !== 0 ? items.filter(i => {
    const searchString = i.name + i.manufacturer + i.description + i.category;
    return searchString.toLowerCase().includes(searchPhrase)
  }) : items;

  return (
  <div className={styles.App}>
    <Searchbar searchOnChange={searchOnChange}/>
    <Itemcontainer items={filteredItems}/>
  </div>
  );
};

export default App;