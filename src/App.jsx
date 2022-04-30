import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllPosts from "./components/Allposts";
import Main from "./components/Main";
import Popup from "./components/Popup";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {Routes, Route} from "react-router-dom";


const App = () => {
    const [popupActive, changePopup] = useState(false);  
    const [regModalActive, setRegModal] = useState(false);
    const [authModalActive, setAuthModal] = useState(false);
    return (
        <div className="wrapper">
            <Header 
            shown={popupActive} close={changePopup} 
            regModalActive={regModalActive} setRegModal={setRegModal}
            authModalActive={authModalActive} setAuthModal={setAuthModal}
            />
            <div className="wrapper-content">
                <main>
                    <Routes>
                        <Route path="/" element={
                            <Main name="Главная"/>
                        }/>
                        <Route path="/allposts" element={
                            <AllPosts name="Публикации"/>
                        }/> 
                        <Route path="/allposts/:page" element={
                            <AllPosts name="Публикации"/>
                        }/> 
                    </Routes>    
                </main>
            </div>
            <Popup shown={popupActive} close={changePopup} />
            <SignUp 
            regModalActive={regModalActive} setRegModal={setRegModal} 
            />
            <SignIn 
            authModalActive={authModalActive} setAuthModal={setAuthModal} 
            />               
            <Footer />
        </div>
    )
}


export default App;