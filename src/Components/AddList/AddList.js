import React,{useState} from 'react';
import AddItem from '../AddItem/AddItem';

function AddList() {
  //UseSatete Hook de react, 
  const [text, setText]=useState(''); //estado para almacenar la entrada del usuaruio
  const [list, setList]=useState([]); //estado para almacenar la lista de listas

  // controlador de eventos para cuando cambia el valor del input
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // controlador de eventos para cuando se presiona la tecla Enter en el input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); //previene el comportamiento por defecto del formulario
      const newList = { // crea un nuevo objeto para agregar a la lista de listas
        id:Date.now(),
        title:text,
        items:[]
      };
      setList([...list, newList]); // agrega el nuevo objeto a la lista de listas
      setText(''); // limpiamos el valor del input
    }
  }

    return (
       <div>
         <input type="text"
          placeholder="agrega una Lista"
          value= {text}
          onChange = {handleChange}
          onKeyDown = {handleKeyDown}
        />
        {list.map(list =>(
          <div key={list.id}>
            <h3>{list.title}</h3> 
            <AddItem/>
          </div>
        ))}
       </div>
    );
}


export default AddList;