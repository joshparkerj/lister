import React, { Component } from 'react';
import Draggable from './Draggable';
import './Droppable.css';

class Droppable extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: ''
    }
  }

  addItem = () => {
    this.setState({
      items: [...this.state.items,this.state.item],
      item: ''
    })
  }

  hc = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onDragOver = e => {
    e.preventDefault();
  }

  onDrop = (e, i) => {
    this.setState({
      items: [...this.state.items, e.dataTransfer.getData("content")]
    });
  }

  itemMapper = (e, i) => {
    return (
      <Draggable key={i} content={e} />
    );
  }

  render() {
    return (
      <div className="Droppable"
        onDragOver={this.onDragOver}
        onDrop={e => this.onDrop(e, this.props.key)}
      >
        <h1>{this.props.content}</h1>
        <button onClick={this.addItem}>ADD ITEM TO THIS LIST</button>
        <input onChange={this.hc} name="item" value={this.state.item}/>
        {this.state.items.map(this.itemMapper)}
      </div>
    );
  }
}

export default Droppable;
