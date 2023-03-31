import React, { useState } from 'react';



function ItemList({ items }) {
  const [newItem, setNewItem] = useState(''); // state to track new item input

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission from reloading the page
    if (newItem !== '') { // check if input is not empty
      items.push(newItem); // add new item to the end of the items array
      setNewItem(''); // reset the input field
    }
  }

  const handleChange = (event) => {
    setNewItem(event.target.value); // update the state with the new input value
  }

  return (
    
    <div className="item-list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        
      </ul>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ItemList;
