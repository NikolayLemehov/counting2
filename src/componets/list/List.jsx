import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {delOperation} from "../../asyncAction/delOperation";

const List = () => {
  const dispatch = useDispatch()
  const operations = useSelector(state => state.operation.operations)
  return (
    <ul>
      {operations.map(it => <li key={it._id}>
        {it.text}
        <button type={'button'} onClick={() => dispatch(delOperation(it._id))}>Del</button>
      </li>)}
    </ul>
  );
};

export default List;