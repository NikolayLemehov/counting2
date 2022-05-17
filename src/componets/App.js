import './App.css';
import axios from "axios";
import {URL_API} from "../config";
import {useState} from "react";
import List from "./list/List";

function App() {
  const clickGetHandler = () => {
    console.log('click')
    axios.get(`${URL_API}api/auth/request`)
      .then(res => console.log('response', res.data))
      .catch(e => console.log('error', e))
  }
  const clickPostHandler = () => {
    console.log('click')
    axios.post(`${URL_API}api/auth/request`, {text: value})
      .then(res => {
        setOperations(res.data.operations)
        console.log('response', res.data.operations)
        setValue('')
      })
      .catch(e => console.log('error', e))
  }
  const [value, setValue] = useState('')
  const [operations, setOperations] = useState([])
  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <input type={"text"} value={value} onChange={changeHandler}/>
        <button type={"button"} onClick={clickGetHandler}>GET request</button>
        <button type={"button"} onClick={clickPostHandler}>POST request</button>
      </div>
      <List operations={operations}/>
    </div>
  );
}

export default App;
