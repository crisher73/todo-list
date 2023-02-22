import React, {useState} from 'react';

function AddItem({onAddItem}) {
    //UseSatete Hook de react, 
    const [item, setItem]=useState('');//estado para almacenar la entrada del usuario
    const [itemList, setItemList]=useState([]);//estado para almacenar la lista de items.
  
    // controlador de eventos para cuando cambia el valor del input
    const handleChange = (event) => {
      setItem(event.target.value);
    };
    
    // controlador de eventos para cuando se presiona la tecla Enter en el input
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); //previene el comportamiento por defecto del formulario
        const newItem = { // crea un nuevo objeto para agregar a la lista de listas
          id:Date.now(),
          name:item, ////Asigna como valor para la propiedad "name" el valor actual del estado local "item"
        };
        setItemList([...itemList, newItem]);// agrega el nuevo objeto a la lista de items.
        setItem(''); // limpia el valor del input del Item
      }
    }
    return (
        <div>
            <input type="text"
            placeholder='Agrega una tarea'
            value={item} //Asigna el valor actual del estado local "item" como valor del input
            onChange={handleChange} //Asigna el controlador de evento "handleChange" al evento "onChange" del input
            onKeyDown={handleKeyDown} //Asigna el controlador de evento "handleKeyDown" al evento "onKeyDown" del input
            />
            <ul>
                {itemList.map(item => ( //Itera sobre los elementos del arreglo "itemList" y los muestra en una lista
                    <li key={item.id}>{item.name}</li> //Muestra el valor de la propiedad "name" del objeto actual en un elemento "li"
                ))}
            </ul>
        </div>
    )
}

export default AddItem;