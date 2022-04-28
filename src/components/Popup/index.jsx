import React from "react";
import "./index.css";

function Popup({shown, close}) {
    return <div className={shown ? "modal active" : "modal"}>
                    <div className="modal-content">
                        <h2>Создание публикации</h2>
                        <input placeholder="URL изображения для публикации" type="text" name="image"/>
                        <input placeholder="Заголовок публикации" type="text" />
                        <textarea placeholder="Текст публикации" name="text" id="" cols="30" rows="10"></textarea>
                        <input placeholder="Введите тэги, через запятую" type="text" name="tags" />
                        <button className="modal-btn">Создать</button>
                    </div>
                    <div className="modal-close" onClick={() => close(false)}>
                        <i className="fa-solid fa-xmark"/>
                    </div>
    </div>   
}

export default Popup;