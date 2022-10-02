import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import {Route, Routes} from "react-router-dom"
import Blog from "./blog/Blog"
import FullPost from "./blog/FullPost";
import postData from "../data/PostData";
import Posts from "./blog/Posts";


export default function App(){

    return(
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog data={postData}/>}>
                <Route path="" element={<Posts data={postData}/>}/>
                <Route path=":postSlug" element={<FullPost data={postData}/>}/>
            </Route>

        </Routes>
        </>
    )
}