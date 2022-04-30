import React, {useState} from "react";
import "./index.css";
import api from "../../Api";

function Popup({shown, close}) {
    // const Form = {
    //     "title": {title}, // тип данных строка, обязательное
    //     "text": {text}, // тип данных строка, обязательное
    //     "image": {image}, // тип данных строка
    //     "tags": [{tags}] //тип данных массив строк
    // };

    // const params = new FormData();


    const [value, setValue] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [tags, setTags] = useState("");
    // api.createNewPost()

    return <div className={shown ? "modal active" : "modal"}>
                    <div className="modal-content">
                        <h2>Создание публикации</h2>
                        <form className="add-post-popup" id="create-post">
                            <input 
                                value={image} 
                                onChange={(e) => setImage(e.target.value)} 
                                placeholder="URL изображения для публикации" 
                                type="text" 
                                name="image"
                            />
                            <input 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                placeholder="Заголовок публикации" 
                                type="text" 
                                required 
                            />
                            <textarea 
                                value={text} 
                                onChange={(e) => setText(e.target.value)} 
                                placeholder="Текст публикации" 
                                name="text" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                required>
                            </textarea>
                            <input 
                                value={tags} 
                                onChange={(e) => setTags(e.target.value)} 
                                placeholder="Введите тэги, через запятую" 
                                type="text" 
                                name="tags" 
                            />
                            <button className="modal-btn"  
                                onClick={() => api.createNewPost(Form)}
                                // onClick={() => console.log(title)}
                                >
                                Создать
                                
                            </button>
                        </form>
                    </div>
                    <div className="modal-close" onClick={() => close(false)}>
                        <i className="fa-solid fa-xmark"/>
                    </div>
    </div>   
}

export default Popup;