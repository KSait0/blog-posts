import React from "react";
import {Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import api from "./Api.js";
import AllPosts from "./components/Allposts";
import Main from "./components/Main";
import Popup from "./components/Popup";
// import Pagination from "./Pagination";
import {Routes, Route} from "react-router-dom";


const App = () => {

    return (
        <div className="wrapper">
            <Header />
            <div className="wrapper-content">
                <main>
                    <Routes>
                        <Route path="/" element={
                            <Main name="Главная"/>
                        }/>
                        <Route path="/allposts" element={
                            <AllPosts name="Публикации"/>
                        }/>
                    </Routes>    
                </main>
            </div>
            <Popup />
            <Footer />
        </div>
    )
}


export default App;