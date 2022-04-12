import React, { useState } from 'react';
import '../StyleSheet/Square.css';
// import Winner from './Winner';

// To keep track of the symbol change
let changeSymbol = 1;

const Square = ({ cellNum }) => {
  const [symbol, symbolChange] = useState('-');
  const handleClick = (square) => {
    // The user cannot click again to change the box
    if (symbol !== '-') {
      alert('You have clicked on this before');
      changeSymbol--;
    }

    if (changeSymbol % 2 === 1) {
      symbolChange('X');
      changeSymbol++;
    } else {
      symbolChange('O');
      changeSymbol++;
    }
  };
  return (
    <>
      <td className={`square`} onClick={() => handleClick(cellNum)}>
        {symbol}
      </td>
    </>
  );
};

export default Square;
