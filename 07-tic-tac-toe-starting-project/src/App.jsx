import {Component, useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const handleSelectSquare = () => {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    }
    return (<main>
        <div className="App" id={"game-container"}>
            <ol id={"players"} className={"highlight-player"}>
                <Player initialPlayerName={"Player 1"} playerSymbol={"X"} isActive={activePlayer === 'X'}/>
                <Player initialPlayerName={"Player 2"} playerSymbol={"O"} isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
        LOG
    </main>)
}

export default App
