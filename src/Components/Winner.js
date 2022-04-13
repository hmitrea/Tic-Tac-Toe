import React from 'react';

const Winner = () => {
  //    winnerCombos
  // Horizontal
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],

  // Vertical
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],

  // Diagonal
  //     [0, 4, 8],
  //     [2, 4, 6],

  const symbolsOnTheDom = () => {
    // All 9 boxes
    const symbol0 = document.getElementsByClassName('square')[0].innerHTML;
    const symbol1 = document.getElementsByClassName('square')[1].innerHTML;
    const symbol2 = document.getElementsByClassName('square')[2].innerHTML;

    const symbol3 = document.getElementsByClassName('square')[3].innerHTML;
    const symbol4 = document.getElementsByClassName('square')[4].innerHTML;
    const symbol5 = document.getElementsByClassName('square')[5].innerHTML;

    const symbol6 = document.getElementsByClassName('square')[6].innerHTML;
    const symbol7 = document.getElementsByClassName('square')[7].innerHTML;
    const symbol8 = document.getElementsByClassName('square')[8].innerHTML;

    // Horizontal
    if (symbol0 === symbol1 && symbol1 === symbol2 && symbol0 !== '-') {
      console.log('We have a winner', symbol0);
    } else if (symbol3 === symbol4 && symbol4 === symbol5 && symbol3 !== '-') {
      console.log('We have a winner', symbol3);
    } else if (symbol6 === symbol7 && symbol7 === symbol8 && symbol6 !== '-') {
      console.log('We have a winner', symbol6);
    }

    // Vertical
    if (symbol0 === symbol3 && symbol3 === symbol6 && symbol0 !== '-')
      console.log('We have a winner', symbol0);
    else if (symbol1 === symbol4 && symbol4 === symbol7 && symbol1 !== '-')
      console.log('We have a winner', symbol1);
    else if (symbol2 === symbol5 && symbol5 === symbol8 && symbol1 !== '-')
      console.log('We have a winner', symbol2);

    // Diagonal
    if (
      symbol0 !== '-' &&
      symbol4 !== '-' &&
      symbol0 === symbol4 &&
      symbol4 === symbol8
    ) {
      console.log('We have a winner', symbol0);
    } else if (
      symbol2 !== '-' &&
      symbol4 !== '-' &&
      symbol2 !== '-' &&
      symbol2 === symbol4 &&
      symbol4 === symbol6
    )
      console.log('We have a winner ', symbol2);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            symbolsOnTheDom();
          }}
        >
          Calculate Winner
        </button>
      </div>
    </>
  );
};

export default Winner;
