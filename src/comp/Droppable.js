import React, { Component } from 'react';
import './Droppable.css';

class Droppable extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  onDragOver = e => {
    e.preventDefault();
  }

  onDrop = (e,i) => {
    this.setState({
      items: [...this.state.items, e.data]
    });
  }

  render() {
    return (
      <div className="Droppable"
        onDragOver={this.onDragOver}
        onDrop={e=>this.onDrop(e,this.props.key)}
      >
        {this.props.content}
      </div>
    );
  }
}

export default Droppable;
