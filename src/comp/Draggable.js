import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Draggable.css';

const pos = [0, 0, 0, 0];

class Draggable extends Component {
  constructor() {
    super();
    this.state = {
      dragging: false,
      n: null
    }
  }

  componentDidMount() {
    this.setState({
      n: ReactDOM.findDOMNode(this)
    })
  }

  handleClick = e => {
    e.preventDefault();
    if (!this.state.dragging) {
      pos[2] = e.clientX;
      pos[3] = e.clientY;
      this.setState({ dragging: true });
    }
  }

  handleMouseUp = e => {
    this.setState({ dragging: false });
  }

  handleMouseMove = e => {
    e.preventDefault();
    if (this.state.dragging) {
      pos[0] = pos[2] - e.clientX;
      pos[1] = pos[3] - e.clientY;
      pos[2] = e.clientX;
      pos[3] = e.clientY;
    }
  }

  render() {
    return (
      <div
        className="Draggable"
        onClick={this.handleClick}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        style={this.state.n ? {
          top: `${this.state.n.offsetTop - pos[1]}px`,
          left: `${this.state.n.offsetLeft - pos[0]}px`
        } : {}}
      >
        {this.props.content}
      </div>
    );
  }
}

export default Draggable;
