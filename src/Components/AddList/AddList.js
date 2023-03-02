import React, { useState } from 'react';
import AddItem from '../AddItem/AddItem';
import useLocalStorage from '../useLocalStorage/useLocalStorage';
import './AddList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AddList() {
  //UseState Hook de react, 
  const [text, setText] = useState(''); //estado para almacenar la entrada del usuario
  const [list, setList] = useLocalStorage('list', []); //estado para almacenar la lista de listas

  const key0 = 'items-1'
  if (!localStorage.getItem(key0)) {
    const firstList = {
      id: 1,
      title: "MY FIRST LIST"
    };
    setList([firstList]);
    localStorage.setItem(key0, JSON.stringify([
      {id:1,name:"Task 1 ",isChecked:true},
      {id:2,name:"Task 2",isChecked:false},
      {id:3,name:"Task 3",isChecked:true},
      {id:4,name:"Task 4",isChecked:false}
    ]));
  }

  // controlador de eventos para cuando cambia el valor del input
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // controlador de eventos para cuando se presiona la tecla Enter en el input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); //previene el comportamiento por defecto del formulario
      const newList = { // crea un nuevo objeto para agregar a la lista de listas
        id: Date.now(), //Asigna como valor para la propiedad "id" la fecha y hora actual (timestamp)
        title: text
      };
      setList([...list, newList]); // agrega el nuevo objeto a la lista de listas
      setText(''); // limpia el valor del input
    }
  }

  //controlador de eventos para eliminar una lista y sus elementos. 
  const handleDeleteList = (id) => {
    const newList = list.filter(list => list.id !== id); //crea una nueva lista sin la lista con el id especificado
    setList(newList); // actualiza el estado de la lista de listas. 
  };

  return (
    <div >
      <div className='InputList'>
        <input type="text"
          placeholder="Agrega una lista"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='Lists'>
        {list.map(list => (
          <div key={list.id} className='AddList' >
            <div className='TitleList'>
              <h3>{list.title}</h3>
              <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteList(list.id)} />
            </div>
            <AddItem listId={list.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddList;