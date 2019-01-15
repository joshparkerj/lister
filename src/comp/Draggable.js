import React from 'react';
import './Draggable.css';

function Draggable(props) {
  return (
    <div className="Draggable"
      draggable
      onDragStart={e => props.ods(e, props.item)}
    >
      {props.item.content}
      <button className="delete-button" onClick={props.deleteItem}>X</button>
    </div>
  );
}

export default Draggable;
