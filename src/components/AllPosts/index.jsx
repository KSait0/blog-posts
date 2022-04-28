import React, {useState, useEffect} from 'react';
import "./index.css";
import api from "../../Api.js";  
import Post from "../Post";
import {Link} from "react-router-dom";

function AllPosts() {
    const [posts, getAllPosts] = useState([[]]);
    const [users, getAllUsers] = useState([{}]);

    useEffect(() => {
        api.getAllPosts().then(data => {
             let p = [];
                for (let i = 0; i < data.length; i++) {
                    if (i % 18 === 0) {
                        p.push([])
                    }
                    p[p.length - 1].push(data[i]);
                }
            console.log(p);
            getAllPosts(p);
        })}, []);

    return (
        <div>
        <div className="all-posts">
            {!posts.err && posts[0].map((p, _i) => (
                <Link to={"/posts/" + p._id} key={p._id}>
                    <Post {...p} key={p._id} />  
                </Link>
            ))}
        </div>
        {/* <div>
            {!posts.err && posts.map((p, i) => 
                <Route path={"/allposts/"+(i+1)} element={
                    <div className="wrap">
                        {p.map(post =>                                  
                            <Post {...post} key={post._id}/>}
                    </div>}
                />)}
        </div> */}
        <div className="pages">
                {posts.map((p, i) => 
                <Link to={"/allposts/"+(i+1)} className="page" key={i}>
                    {i+1}
                </Link>
                )}
            </div>
        </div>
    )
}

export default AllPosts;