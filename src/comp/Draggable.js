import React, { Component } from 'react';
import './Draggable.css';

class Draggable extends Component {

  onDragStart = (e,content) => {
    e.dataTransfer.setData("content",content);
  }

  render() {
    return (
      <div className="Draggable"
        key={this.props.key}
        draggable
        onDragStart={e=>this.onDragStart(e,this.props.content)}
      >
        {this.props.content}
      </div>
    );
  }
}

export default Draggable;
