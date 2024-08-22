import {Component, useState} from "react";

// class Player extends Component {
//     playerName = this.props.playerName;
//     playerSymbol = this.props.playerSymbol;

function Player({initialPlayerName, playerSymbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);
    let handleEditClick = () => setIsEditing((editing) => !isEditing);
    let handleChange = (evt) => {
        setPlayerName(evt.target.value);
    }
    let editablePlayerName = isEditing
        ? <input id={"editName"} required onChange={handleChange} value={playerName}/>
        : <span className={"player-name"}>{playerName}</span>
    return <li className={isActive ? 'active' : undefined}>
        <span className={"player"}>
            {editablePlayerName}
            <span className={"player-symbol"}>{playerSymbol}</span>
        </span>
        <button onClick={handleEditClick} className={""}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>;

}

export default Player;