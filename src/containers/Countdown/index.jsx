import React, { useEffect, useRef, useState } from "react";
import './CountDown.css';

const Countdown = () => {
    const [value, setValue] = useState(0);
    const intervalRef = useRef(null);

    const handleStart = () => {
        console.log(value);
        intervalRef.current = setInterval(() => {
            setValue(prevValue => prevValue + 1);
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(intervalRef.current);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
        setValue(0);
    }
    return (
        <div className="container">
            <div className="fields">
                <input type="number" value={value} placeholder="hours" onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="options">
                <button type="button" name="Pause" onClick={handleStart}>Start</button>
                <button type="button" name="Pause" value="Pause" onClick={handlePause}>Pause</button>
                <button type="button" name="Reset" value="Reset" onClick={handleStop}>Stop</button>
            </div>
        </div>
    )
}

export default Countdown