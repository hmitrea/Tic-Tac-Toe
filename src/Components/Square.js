import React, { useState } from 'react';
import '../StyleSheet/Square.css';
// import Winner from './Winner';

// To keep track of the symbol change
let changeSymbol = 1;

const Square = ({ cellNum }) => {
  const [symbol, symbolChange] = useState('-');
  console.log('the cellNum and symbol is', cellNum, symbol);
  const handleClick = (square) => {
    // The user cannot click again to change the box
    if (symbol !== '-') {
      alert('You have clicked on this before');
      changeSymbol--;
    }
    if (changeSymbol % 2 === 1) {
      changeSymbol++;
      symbolChange('X');
    } else {
      symbolChange('O');
      changeSymbol++;
    }
  };
  return (
    <>
      <td onClick={() => handleClick(cellNum)}>{symbol}</td>
    </>
  );
};

export default Square;
