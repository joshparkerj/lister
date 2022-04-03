import React from 'react';
import PropTypes from 'prop-types';

import './Draggable.css';

const Draggable = function Draggable({ ods, item, deleteItem }) {
  return (
    <div
      className="Draggable"
      draggable
      onDragStart={(e) => ods(e, item)}
    >
      {item.content}
      <button type="button" className="delete-button" onClick={deleteItem}>X</button>
    </div>
  );
};

Draggable.propTypes = {
  ods: PropTypes.func.isRequired,
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Draggable;
