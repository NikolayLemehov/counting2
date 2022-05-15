import './App.css';
import axios from "axios";

function App() {
  const clickHandler = () => {
    console.log('click')
    axios.get(`http://localhost:5000/api/auth/request`)
      .then(res => console.log('response', res.data))
      .catch(e => console.log('error', e))
  }

  return (
    <div className="App">
      <button type={"button"} onClick={clickHandler}>Send request</button>
    </div>
  );
}

export default App;
