import React, { useState } from 'react';
import useLocalStorage from '../useLocalStorage/useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './AddItem.css';

function AddItem({listId }) {
  //UseState Hook de react, 
  const [item, setItem] = useState('');//estado para almacenar la entrada del usuario
  const [itemList, setItemList] = useLocalStorage(`items-${listId}`,[]);//estado para almacenar la lista de items.

  // controlador de eventos para cuando cambia el valor del input
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  // controlador de eventos para cuando se presiona la tecla Enter en el input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); //previene el comportamiento por defecto del formulario
      const newItem = { // crea un nuevo objeto para agregar a la lista de listas
        id: Date.now(),
        name: item, ////Asigna como valor para la propiedad "name" el valor actual del estado local "item"
        isChecked: false, // agrega una propiedad "isChecked" inicialmente en flase. 
      };
      setItemList([...itemList, newItem],`items-${listId}`);// agrega el nuevo objeto a la lista de items.
      setItem(''); // limpia el valor del input del Item
    }
  }

  //controlador de eventos para cuandop se hace click en el checkbox
  const handleCheckboxChange = (id) => {
    setItemList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item, 
            isChecked: !item.isChecked, //cambia el valor de isChecked al valor opuesto al actual. 
          };
        }
        return item;
      })
    );
  };

    //controlador de eventos para eliminar un item.
    const handleDeleteItem = (id) => {
      const newItems = itemList.filter(item => item.id !==id); //crea una nueva lista sin la lista con el id especificado
      setItemList(newItems); // actualiza el estado de la lista de listas. 
    };

  return (
    <div>
      <input
        type="text"
        placeholder='Agrega una tarea'
        value={item} //Asigna el valor actual del estado local "item" como valor del input
        onChange={handleChange} //Asigna el controlador de evento "handleChange" al evento "onChange" del input
        onKeyDown={handleKeyDown} //Asigna el controlador de evento "handleKeyDown" al evento "onKeyDown" del input
      />
      <ul>
        {itemList.map(item => ( //Itera sobre los elementos del arreglo "itemList" y los muestra en una lista
          <li //Muestra el valor de la propiedad "name" del objeto actual en un elemento "li"
            key={item.id}
            style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }} //añade el estilo a la lista 
          >
            <input
            type='checkbox'
            checked={item.isChecked} // asigna el valor actual de 'isCkeched' como el estado actual del checkbox. 
            onChange={() => handleCheckboxChange(item.id)} //asigna el controlado de evento "handleCheckboxChange" al evento "oncahnge" del checkbox.
            />
            {item.name} 
            <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteItem(item.id)} />
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default AddItem;