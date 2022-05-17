import React from 'react';

const List = (props) => {
  console.log(props.operations)
  return (
    <ul>
      {props.operations.map(it => <li key={it._id}>{it.text}</li>)}
    </ul>
  );
};

export default List;