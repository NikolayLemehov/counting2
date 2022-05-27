// import {useEffect} from "react";
// import {useDispatch} from "react-redux";
// import {fetchOperations} from "../asyncAction/fetchOperations";
// import {Container} from "@mui/material";
// import ListTable from "./list/ListTable";
// import MyForm from "./MyForm/MyForm";

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => dispatch(fetchOperations()), [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // <Container>
    //   <h1>Counting</h1>
    //   {/*<MyForm/>*/}
    //   {/*<ListTable/>*/}
    // </Container>
  );
}

export default App;
