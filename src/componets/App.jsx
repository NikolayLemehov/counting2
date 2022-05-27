import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchOperations} from "../asyncAction/fetchOperations";
import {Container} from "@mui/material";
// import ListTable from "./list/ListTable";
// import MyForm from "./MyForm/MyForm";

function App() {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchOperations()), [dispatch])

  return (
    <h1>Counting</h1>
    // <Container>
    //
    //   {/*<MyForm/>*/}
    //   {/*<ListTable/>*/}
    // </Container>
  );
}

export default App;
