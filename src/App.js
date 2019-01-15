import React, { Component } from 'react';
import Droppable from './comp/Droppable';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listTitles: ['fox', 'yoda', 'dresden'],
      items: [],
      nextID: 0
    }
  }

  addItem = item => {
    item.ID = this.state.nextID;
    this.setState({
      items: [...this.state.items, item],
      nextID: this.state.nextID + 1
    })
  }

  moveItem = (itemID, newList) => {
    this.setState({
      items: this.state.items.map(e => {
        if (e.ID === parseInt(itemID)) {
          e.list = newList;
        }
        return e;
      })
    })
  }

  removeItem = itemID => {
    this.setState({
      items: this.state.items.filter(e => e.ID !== itemID)
    })
  }

  listMapper = (title, i) => {
    return (
      <Droppable key={i}
        title={title}
        items={this.state.items.filter(e => e.list === title)}
        addItem={this.addItem}
        removeItem={this.removeItem}
        moveItem={this.moveItem}
      />
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.listTitles.map(this.listMapper)}
      </div>
    );
  }
}

export default App;
