import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/">
                <h1>home</h1>
            </Link>
            <Link to="/grid">
                <h1>grid</h1>
            </Link>
            <Link to="/pollWidget">
                <h1>pollWidget</h1>
            </Link>
            <Link to="/countDown">
                <h1>CountDown</h1>
            </Link>
        </div>
    )
}

export default Header