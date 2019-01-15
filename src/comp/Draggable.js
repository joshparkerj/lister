import React from 'react';
import './Draggable.css';

function Draggable(props) {
  return (
    <div className="Draggable"
      draggable
      onDragStart={e => props.ods(e, props.item)}
    >
      {props.item.content}
    </div>
  );
}

export default Draggable;
