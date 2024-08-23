import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./components/winning_combinations.js";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    let gameBoard = initialGameBoard;
    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol
            && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }
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
            {winner && <p>You won, {winner}!</p>}
            <GameBoard onSelectSquare={handleSelectSquare}
                       board={gameBoard}/>
        </div>
        <Log history={gameTurns}/>
    </main>)
}

export default App
