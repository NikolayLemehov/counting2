import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchOperations} from "../asyncAction/fetchOperations";
import {addOperation} from "../asyncAction/addOperation";
import {formatDate} from "../utils/formatDate";
import {Container} from "@mui/material";
import ListTable from "./list/ListTable";

function App() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [date, setDate] = useState(formatDate(new Date()))
  useEffect(() => dispatch(fetchOperations()), [])


  return (
    <Container>
      <div>
        <input type={"text"} value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type={"date"} value={date} onChange={(e) => setDate(e.target.value)}/>

        <button
          type={"button"}
          onClick={() => dispatch(addOperation({date, value}))}
          className={'btn'}
        >ADD item</button>
      </div>
      <ListTable/>
    </Container>
  );
}

export default App;
