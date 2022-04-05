import React, { useState } from 'react';
import Droppable from './comp/Droppable';
import './App.css';

const App = function App() {
  const [listTitles, setListTitles] = useState([]);
  const [listTitle, setListTitle] = useState('');
  const [items, setItems] = useState([]);
  const [nextID, setNextID] = useState(0);

  const addList = (e) => {
    e.preventDefault();
    setListTitles([...listTitles, listTitle]);
    setListTitle('');
  };

  const removeList = (listIndex) => {
    setItems(items.filter((item) => item.list !== listTitles[listIndex]));
    setListTitles(listTitles.filter((_, i) => i !== listIndex));
  };

  const addItem = (item) => {
    setItems([...items, { ...item, ID: nextID }]);
    setNextID(nextID + 1);
  };

  const moveItem = (itemID, newList) => {
    setItems(items.map((item) => (
      item.ID === parseInt(itemID, 10) ? { ...item, list: newList } : item
    )));
  };

  const removeItem = (itemID) => {
    setItems(items.filter((item) => item.ID !== itemID));
  };

  const listMapper = (title, i) => (
    <Droppable
      key={i}
      listIndex={i}
      title={title}
      items={items.filter((e) => e.list === title)}
      addItem={addItem}
      removeItem={removeItem}
      moveItem={moveItem}
      removeList={removeList}
    />
  );

  return (
    <div className="App">
      <h1>LISTER</h1>
      <form autoComplete="off" onSubmit={addList}>
        <button type="submit" disabled={!listTitle}>
          ADD ANOTHER LIST
        </button>
        <label htmlFor="listTitle">
          <input
            onChange={({ target }) => setListTitle(target.value)}
            name="listTitle"
            id="listTitle"
            value={listTitle}
          />
          LIST TITLE
        </label>
      </form>
      <div className="the-lists">
        {listTitles.map(listMapper)}
      </div>
    </div>
  );
};

export default App;
