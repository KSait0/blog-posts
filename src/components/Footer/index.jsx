import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer >
            <div className="container">
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/allposts">Публикации</Link></li>
            </ul>
            <ul>
                <li><Link to="/signin">Авторизация</Link></li>
                <li><Link to="/signup">Регистрация</Link></li>
            </ul>
            <p className="copyright">
                Автор проекта: <a href="https://github.com/KSait0">Гуляев Иван</a>.2022 ©</p>
            </div>
            
        </footer>
    )
}

export default Footer;