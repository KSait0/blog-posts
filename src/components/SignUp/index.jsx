import React from "react";
import "./index.css";

function SignUp({regModalActive, setRegModal}) {
    return (
        <div className={regModalActive ? "modal active" : "modal"}>
            <div className="modal-content">
                <h2>Регистрация</h2>
                <form>
                    <label htmlFor="signup-login">Логин</label>
                    <input type="text" id="signup-login" />
                    <label htmlFor="signup-password">Пароль</label>
                    <input type="text" id="signup-password" />
                    <button className="sign-btn">Зарегистрироваться</button>
                </form>
            </div>
            <div className="modal-close" onClick={() => setRegModal(false)}>
                        <i className="fa-solid fa-xmark"/>
            </div>
        </div>
    )
}

export default SignUp;