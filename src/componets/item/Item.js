import React from 'react';

const Item = ({text}) => {
  return (
    <li>
      {text}
      <button>Del</button>
    </li>
  );
};

export default Item;