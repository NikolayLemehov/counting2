import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchOperations} from "../asyncAction/fetchOperations";
import {Container} from "@mui/material";
import ListTable from "./list/ListTable";
import MyForm from "./MyForm/MyForm";

function App() {
  const dispatch = useDispatch()
  const hasListLoading = useSelector(state => state.operation.hasListLoading)
  useEffect(() => dispatch(fetchOperations()), [dispatch])
  return (
    <Container>
      <h1>Counting</h1>

      <MyForm/>
      {hasListLoading ? <div>Loading...</div> : <ListTable/>}
    </Container>
  );
}

export default App;
