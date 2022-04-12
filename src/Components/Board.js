import React from 'react';
import Square from './Square';
import Winner from './Winner';
import '../StyleSheet/Board.css';

const Board = () => {
  return (
    <>
      <div className='game-board'>
        <table>
          <tbody>
            <tr>
              <Square cellNum={0} />
              <Square cellNum={1} />
              <Square cellNum={2} />
            </tr>
            <tr>
              <Square cellNum={3} />
              <Square cellNum={4} />
              <Square cellNum={5} />
            </tr>
            <tr>
              <Square cellNum={6} />
              <Square cellNum={7} />
              <Square cellNum={8} />
            </tr>
          </tbody>
        </table>
      </div>
      {/*  // This will restart the game at any point by refreshing the page */}
      <Winner />
      <button onClick={() => window.location.reload()}>Restart</button>
    </>
  );
};

export default Board;
