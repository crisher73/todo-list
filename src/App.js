import './App.css';
import AddList from "../src/Components/AddList/AddList"
import useLocalStorage from '../src/Components/useLocalStorage/useLocalStorage'

function App() {
  // Usar el hook useLocalStorage para obtener y guardar datos en el localStorage
  const [myList, setMyList] = useLocalStorage('myList', []);


  return (
    <div>
      <h1>ToDo-List</h1>
      <AddList myList={myList} setMyList={setMyList} />
    </div>
  );
}

export default App;
