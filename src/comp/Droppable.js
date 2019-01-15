import React, { Component } from 'react';
import Draggable from './Draggable';
import './Droppable.css';

class Droppable extends Component {
  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  addItem = e => {
    e.preventDefault();
    this.props.addItem({
      list: this.props.title,
      content: this.state.item
    });
    this.setState({ item: '' });
  }

  hc = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onDragOver = e => {
    e.preventDefault();
  }

  onDrop = e => {
    const id = e.dataTransfer.getData("id");
    this.props.moveItem(id, this.props.title);
  }

  onDragStart = (event, item) => {
    event.dataTransfer.setData("content", item.content);
    event.dataTransfer.setData("id", item.ID);
  }

  deleteItem = id => {
    this.props.removeItem(id);
  }

  itemMapper = (e, i) => {
    return (
      <Draggable key={i}
        item={e}
        ods={this.onDragStart}
        deleteItem={() => this.deleteItem(e.ID)}
      />
    );
  }

  removeList = () => {
    this.props.removeList(this.props.listIndex);
  }

  render() {
    return (
      <div className="Droppable"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        <div className="droppable-top">
          <h1>{this.props.title}</h1>
          <button className="delete-button" onClick={this.removeList}>X</button>
        </div>
        <form autocomplete="off" onSubmit={this.addItem}>
          <button type="submit">
            ADD ITEM TO THIS LIST
        </button>
          <input onChange={this.hc} name="item" value={this.state.item} />
        </form>
        {this.props.items.map(this.itemMapper)}
      </div>
    );
  }
}

export default Droppable;
