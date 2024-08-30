import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./components/winning_combinations.js";
import GameOver from "./components/GameOver.jsx";

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
    const [players, setPlayers] = useState({
        'X': 'Player 1',
        'O': 'Player 2'
    })
    const [gameTurns, setGameTurns] = useState([]);
    let gameBoard = [...initialGameBoard.map(array => [...array])];
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
            winner = players[firstSquareSymbol];
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
    const handleRestart = () => {
        gameBoard = initialGameBoard;
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {

        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

    const activePlayer = deriveActivePlayer(gameTurns);
    const hasDraw = gameTurns.length === 9 && !winner;
    return (<main>
        <div className="App" id={"game-container"}>
            <ol id={"players"} className={"highlight-player"}>
                <Player initialPlayerName={"Player 1"} playerSymbol={"X"} isActive={activePlayer === 'X'} onPlayerNameChange={handlePlayerNameChange}/>
                <Player initialPlayerName={"Player 2"} playerSymbol={"O"} isActive={activePlayer === 'O'} onPlayerNameChange={handlePlayerNameChange}/>
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
            <GameBoard onSelectSquare={handleSelectSquare}
                       board={gameBoard}/>
        </div>
        <Log history={gameTurns}/>
    </main>)
}

export default App
