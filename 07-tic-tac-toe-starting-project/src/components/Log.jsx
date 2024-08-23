export default function Log({history}) {
    return (
        <ol id={"log"}>
            {
                history.map((item, index) => (
                    <li key={index}>
                        {item.player} selected {item.square.row + ":" + item.square.col}
                    </li>
                ))
            }

        </ol>
    );
}