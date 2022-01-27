import React from "react";
import Item from './components/Item/Item'
import { items } from '../src/amazonItems'
import './App.css'

const App = () => {
  const moreItems = items.concat(items.concat(items.concat(items)))
  return (
  <div className="App">
    {moreItems.map(i => <Item item={i}/>)}
  </div>
  );
};

export default App;