import React, { useEffect, useState } from "react";
import Header from "../../common/header";
import './index.css';

const Home = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(3);
     useEffect(() => {
        console.log("called");
    }, [])
    useEffect(() => {
        console.log("second");
    }, [])
    return (
        <div className="homeContainer">
            {/* <div className="header">
                <Header />
            </div> */}
            <div className="section">
                <h1>body { first }</h1>
                <button onClick={() => setFirst(first + 1)}>Press</button>
            </div>
            <div className="footer">
                <h1>Footer</h1>
            </div>
        </div>
    )
}
export default Home