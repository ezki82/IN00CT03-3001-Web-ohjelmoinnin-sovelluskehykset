import React, { useState } from "react";
import Itemcontainer from './components/Itemcontainer/Itemcontainer'
import Searchbar from './components/Searchbar/Searchbar'
import { items } from '../src/amazonItems'
import styles from './App.module.css'

const App = () => {

  const moreItems = items.concat(items.concat(items.concat(items)))
  const [searchPhrase, setSearchPhrase] = useState('')  

  const searchOnChange = (phrase) => {
    setSearchPhrase(phrase);
  }

  const filteredItems = searchPhrase.length !== 0 ? moreItems.filter(i => i.name.toLowerCase().includes(searchPhrase)) : moreItems;

  return (
  <div className={styles.App}>
    <Searchbar searchOnChange={searchOnChange}/>
    <Itemcontainer items={filteredItems}/>
  </div>
  );
};

export default App;