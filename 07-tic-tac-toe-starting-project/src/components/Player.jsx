import {Component, useState} from "react";

// class Player extends Component {
//     playerName = this.props.playerName;
//     playerSymbol = this.props.playerSymbol;

function Player({playerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false);
    let handleEditClick = () => setIsEditing(true);
    return <li>
        <span className={"player"}>
            {isEditing ? <input id={"editName"}/> : <span className={"player-name"}>{playerName}</span>}
            <span className={"player-symbol"}>{playerSymbol}</span>
        </span>
        <button onClick={handleEditClick} className={""}>Edit</button>
    </li>;

}

export default Player;