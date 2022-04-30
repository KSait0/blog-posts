import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

function Header({shown, close, regModalActive, setRegModal, authModalActive, setAuthModal}) {
    return (
        <header>
            <div className="container">
                <div className="logo"></div>
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/allposts">Публикации</Link>
                    <span
                        onClick={() => setAuthModal(!authModalActive)}
                     >Авторизация</span>
                    <span
                        onClick={() => setRegModal(!regModalActive)}
                     >Регистрация</span>
                </nav>
                <button className="header-btn create-post" onClick={() => close(!shown)}>Создать пост</button>
            </div>
        </header> 
    )
}

export default Header;