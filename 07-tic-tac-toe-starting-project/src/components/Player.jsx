import {Component} from "react";

class Player extends Component {
    playerName = this.props.playerName;
    playerSymbol = this.props.playerSymbol;

    render() {
        return <li>
                    <span className={"player"}>
                        <span className={"player-name"}>{this.playerName}</span>
                        <span className={"player-symbol"}>{this.playerSymbol}</span>
                    </span>
            <button className={""}>Edit</button>
        </li>;
    }
}

export default Player;