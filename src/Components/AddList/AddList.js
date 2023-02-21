import React from 'react';
import AddItem from '../AddItem/AddItem';

function AddList() {
    return (
       <div>
         <input type="text" placeholder="agrega una Lista" />
        <AddItem />
       </div>
    );
}


export default AddList;