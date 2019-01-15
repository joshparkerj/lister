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

  addItem = () => {
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

  itemMapper = (e, i) => {
    return (
      <Draggable key={i} item={e} ods={this.onDragStart} />
    );
  }

  render() {
    return (
      <div className="Droppable"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        <h1>{this.props.title}</h1>
        <button onClick={this.addItem}>ADD ITEM TO THIS LIST</button>
        <input onChange={this.hc} name="item" value={this.state.item} />
        {this.props.items.map(this.itemMapper)}
      </div>
    );
  }
}

export default Droppable;
