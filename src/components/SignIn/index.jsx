import React from "react";
import "./index.css";

function SignIn({authModalActive, setAuthModal}) {
    return (
        <div className={authModalActive ? "modal active" : "modal"}>
            <div className="modal-content">
                <h2>Авторизация</h2>
                <form>
                    <label htmlFor="signin-login">Логин</label>
                    <input type="text" id="signin-login" />
                    <label htmlFor="signup-password">Пароль</label>
                    <input type="text" id="signin-password" />
                    <button className="sign-btn">Зарегистрироваться</button>
                </form>
            </div>
            <div className="modal-close" onClick={() => setAuthModal(false)}>
                        <i className="fa-solid fa-xmark"/>
            </div>
        </div>
    )
}

export default SignIn;