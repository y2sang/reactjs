import React from "react";

function addMinutes(date, minutes) {
    //we multiply minutes by 60000 is to convert minutes to milliseconds
    return new Date(date.getTime() + minutes * 60000);
}

function Clock() {
    let [time, setTime] = React.useState(new Date());

    const handleClick1 = () => {
        setTime(addMinutes(time, 10));
        setTime(addMinutes(time, 10));
        setTime(addMinutes(time, 10));
    };

    const handleClick2 = () => {
        console.log(`time : ${time}`);
        console.log(`setTime : ${setTime}`);
        setTime((previousTime) => {
            console.log(`prev_time : ${previousTime}`);
            return previousTime;
        });

        setTime((previousTime) => addMinutes(previousTime, 10));
    };

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
            <button onClick={handleClick1}>+ 10 Minutes</button>
            <button onClick={handleClick2}>+ 10 Minutes</button>
        </div>
    );
}

export default Clock;