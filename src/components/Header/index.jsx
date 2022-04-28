import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo"></div>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/allposts">Публикации</Link>
                    <Link to="/signin">Авторизация</Link>
                    <Link to="/signup">Регистрация</Link>
                </nav>
                <button className="header-btn create-post">Создать пост</button>
            </div>
        </header> 
    )
}

export default Header;