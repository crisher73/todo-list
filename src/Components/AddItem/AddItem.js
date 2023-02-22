import React, {useState} from 'react';

function AddItem({onAddItem}) {
    
    const [item, setItem]=useState('');
    const [itemList, setItemList]=useState([]);
  
    const handleChange = (event) => {
      setItem(event.target.value);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const newItem = {
          id:Date.now(),
          name:item,
        };
        setItemList([...itemList, newItem]);
        setItem('');
      }
    }
    return (
        <div>
            <input type="text"
            placeholder='Agrega una tarea'
            value={item}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
            <ul>
                {itemList.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default AddItem;