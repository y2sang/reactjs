import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";


function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            let duplicate = false;
            prevTurns.forEach(item => {
                if (item.square.row + ":" + item.square.col === rowIndex + ":" + colIndex) {
                    duplicate = true;
                    return false;
                }
            });
            let resultArr;

            if (duplicate) {
                resultArr = prevTurns;
            } else {
                resultArr = [{
                    square: {row: rowIndex, col: colIndex}, player: currentPlayer
                }, ...prevTurns];
            }


            return resultArr;
        });
    }
    const activePlayer = deriveActivePlayer(gameTurns);
    return (<main>
        <div className="App" id={"game-container"}>
            <ol id={"players"} className={"highlight-player"}>
                <Player initialPlayerName={"Player 1"} playerSymbol={"X"} isActive={activePlayer === 'X'}/>
                <Player initialPlayerName={"Player 2"} playerSymbol={"O"} isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare}
                       turns={gameTurns}/>
        </div>
        <Log history={gameTurns}/>
    </main>)
}

export default App
