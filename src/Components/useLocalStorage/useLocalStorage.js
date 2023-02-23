import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Definimos un estado local "state" que usaremos para mantener el valor actual del estado del componente
  const [state, setState] = useState(() => {
    try {
      // Intentamos leer el valor del LocalStorage con la clave "key"
      const localStorageValue = localStorage.getItem(key);

      // Si encontramos un valor en el LocalStorage, lo parseamos a JSON y lo devolvemos
      if (localStorageValue !== null) {
        return JSON.parse(localStorageValue);
      } else {
        // Si no encontramos un valor en el LocalStorage, devolvemos el valor inicial que nos pasaron
        return initialValue;
      }
    } catch (error) {
      // Si hay algún error al leer el LocalStorage, devolvemos el valor inicial que nos pasaron
      console.error(error);
      return initialValue;
    }
  });

  // Cuando el estado cambia, actualizamos el valor en el LocalStorage
  useEffect(() => {
    try {
      // Guardamos el valor actual en el LocalStorage con la clave "key"
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  // Devolvemos el estado actual y una función para actualizarlo
  return [state, setState];
};

export default useLocalStorage;
