import './App.css';
import {useState} from "react";
import List from "./list/List";
import {useDispatch} from "react-redux";
import {fetchOperations} from "../asyncAction/fetchOperations";
import {addOperation} from "../asyncAction/addOperation";

function App() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const changeHandler = (e) => setValue(e.target.value)

  return (
    <div className="App">
      <div>
        <input type={"text"} value={value} onChange={changeHandler}/>
        <button type={"button"} onClick={() => dispatch(addOperation(value))}>ADD item</button>
        <button type={"button"} onClick={() => dispatch(fetchOperations())}>FETCH list</button>
      </div>
      <List/>
    </div>
  );
}

export default App;
