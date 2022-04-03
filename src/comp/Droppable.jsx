import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Draggable from './Draggable';
import './Droppable.css';

const Droppable = function Droppable({
  addItem, title, moveItem, removeItem, removeList, listIndex, items,
}) {
  const [item, setItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    addItem({
      list: title,
      content: item,
    });

    setItem('');
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = ({ dataTransfer }) => {
    moveItem(dataTransfer.getData('id'), title);
  };

  const onDragStart = ({ dataTransfer }, e) => {
    dataTransfer.setData('content', e.content);
    dataTransfer.setData('id', e.ID);
  };

  const deleteItem = (id) => {
    removeItem(id);
  };

  const itemMapper = (e, i) => (
    <Draggable
      key={i}
      item={e}
      ods={onDragStart}
      deleteItem={() => deleteItem(e.ID)}
    />
  );

  const handleRemoveList = () => {
    removeList(listIndex);
  };

  return (
    <div
      className="Droppable"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="droppable-top">
        <h1>{title}</h1>
        <button type="button" className="delete-button" onClick={handleRemoveList}>X</button>
      </div>
      <form autoComplete="off" onSubmit={handleAddItem}>
        <button type="submit" disabled={!item}>
          NEW ITEM
        </button>
        <input onChange={({ target }) => setItem(target.value)} name="item" value={item} />
      </form>
      {items.map(itemMapper)}
    </div>
  );
};

Droppable.propTypes = {
  addItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  moveItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  listIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number.isRequired,
  })).isRequired,
};

export default Droppable;
