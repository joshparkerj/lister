import React, { Component } from 'react';
import './Draggable2.css';

class Draggable2 extends Component {

  onDragStart = (e,i) => {
    e.dataTransfer.setData("id",i);
  }

  render() {
    return (
      <div className="Draggable2"
        key={this.props.key}
        draggable
        onDragStart={e=>this.onDragStart(e,this.props.key)}
      >
        {this.props.content}
      </div>
    );
  }
}

export default Draggable2;
