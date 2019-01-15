import React, { Component } from 'react';
import './EventTrial.css';

class EventTrial extends Component {

  handleMouseUp = e => {
    console.log('handled mouse up');
    console.log(e);
  }

  render() {
    return (
      <div className="EventTrial" onMouseUp={this.handleMouseUp}>
        {this.props.content}
      </div>
    );
  }
}

export default EventTrial;
