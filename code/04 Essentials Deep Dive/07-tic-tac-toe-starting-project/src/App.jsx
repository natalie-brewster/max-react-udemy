import { useState } from 'react';


import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [ activePlayer, setActivePlayer ] = useState('X');

  // after a square is selected turns will switch
  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="natalie" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
