import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="main-cont">
            <h1>Добро пожаловать в наш блог!</h1>
            <div className="main-img"></div>
            <button className="main-btn"><Link to="/allposts">Перейти к публикациям</Link></button>
            <div className="character-img"></div>
        </div>
    )
}

export default Main;