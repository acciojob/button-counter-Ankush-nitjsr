import React, { useState } from "react";

let numberOfClicks = 0;

const Click = () => {
    let [numberOfClicks, setNumberOfClicks] = useState(0);

    let increaseClicks = () => {
        setNumberOfClicks(numberOfClicks + 1);
    }

    return (
        <div>
            <p>Button clicked {numberOfClicks} times</p>
            <button onClick={increaseClicks}>Click me</button>
        </div>
    );
}

export default Click;