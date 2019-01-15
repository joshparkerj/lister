import React, { Component } from 'react';
import Droppable from './comp/Droppable';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listTitles: [],
      listTitle: '',
      items: [],
      nextID: 0
    }
  }

  hc = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addList = e => {
    e.preventDefault();
    this.setState({
      listTitles: [...this.state.listTitles, this.state.listTitle],
      listTitle: ''
    })
  }

  removeList = listIndex => {
    this.setState({
      listTitles: this.state.listTitles.filter((e, i) => i !== listIndex)
    })
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
        listIndex={i}
        title={title}
        items={this.state.items.filter(e => e.list === title)}
        addItem={this.addItem}
        removeItem={this.removeItem}
        moveItem={this.moveItem}
        removeList={this.removeList}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <form autocomplete="off" onSubmit={this.addList}>
          <button type="submit">
            ADD ANOTHER LIST
          </button>
          <input onChange={this.hc}
            name="listTitle"
            value={this.state.listTitle}
          />
        </form>
        <div className="the-lists">
          {this.state.listTitles.map(this.listMapper)}
        </div>
      </div>
    );
  }
}

export default App;
