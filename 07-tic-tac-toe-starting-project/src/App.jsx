import {Component} from "react";
import Player from "./components/Player.jsx";

function App() {


    return (<main>
        <div className="App" id={"game-container"}>
            <ol id={"players"}>
                <Player playerName={"Player 1"} playerSymbol={"X"}/>
                <Player playerName={"Player 2"} playerSymbol={"O"}/>
            </ol>
        </div>
        LOG
    </main>)
}

export default App
