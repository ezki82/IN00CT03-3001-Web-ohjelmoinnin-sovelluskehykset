import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'pcs' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'pcs' }
      ],
      moreItems: [
        { value: 'Carrots', qty: 1, unit: 'pcs' },
        { value: 'Strawberries', qty: 1, unit: 'pcs' },
        { value: 'Yoghurt', qty: 1, unit: 'pcs' },
        { value: 'Beer', qty: 1, unit: 'pcs' }
      ]
    };

  }
  addRandomAmount(addItem)
  {
    // Is there such item in the list?
    const foundItem = this.state.items.find(item => item.value.toLowerCase() === addItem.value.toLowerCase());

    // If yes then increase qty by random 1-10 amount
    if (foundItem) {
      const randAmount = Math.floor(Math.random() * 10);
      addItem = {...foundItem, qty: foundItem.qty + randAmount};
      this.setState({ items: this.state.items.map((i) => i.id === addItem.id ? addItem : i)})  
      return;    
    }

    // Otherwise, we add new item with next available id to the list
    const newId = Math.max(...this.state.items.map(i => i.id));
    const newItem = {...addItem, id: newId + 1}
    this.setState( {items: this.state.items.concat(newItem)});  
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      {this.state.moreItems.map((item) => <button key={item.value} onClick={() => this.addRandomAmount(item)}>{item.value}</button>)}
    </div>
  }
}

export default App;