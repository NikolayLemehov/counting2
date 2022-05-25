import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchOperations} from "../asyncAction/fetchOperations";
import {addOperation} from "../asyncAction/addOperation";
import {formatDate} from "../utils/formatDate";
import {Container} from "@mui/material";
import ListTable from "./list/ListTable";
import MyForm from "./MyForm/MyForm";

function App() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [date, setDate] = useState(formatDate(new Date()))
  useEffect(() => dispatch(fetchOperations()), [])


  return (
    <Container>
      <h1>Counting</h1>
      <MyForm/>
      <ListTable/>
    </Container>
  );
}

export default App;
