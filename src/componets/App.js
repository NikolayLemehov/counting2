import './App.css';
import axios from "axios";
import {URL_API} from "../config";

function App() {
  const clickGetHandler = () => {
    console.log('click')
    axios.get(`${URL_API}api/auth/request`)
      .then(res => console.log('response', res.data))
      .catch(e => console.log('error', e))
  }
  const clickPostHandler = () => {
    console.log('click')
    axios.post(`${URL_API}api/auth/request`, {surname: 'Liemiekhov'})
      .then(res => console.log('response', res.data))
      .catch(e => console.log('error', e))
  }

  return (
    <div className="App">
      <button type={"button"} onClick={clickGetHandler}>GET request</button>
      <button type={"button"} onClick={clickPostHandler}>POST request</button>
    </div>
  );
}

export default App;
