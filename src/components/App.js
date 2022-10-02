import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import {Route, Routes} from "react-router-dom"
import Blog from "./Blog"
import FullPost from "./FullPost";
import postData from "../data/PostData";


export default function App(){

    return(
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog data={postData}/>}>
                <Route path=":date" element={<FullPost data={postData}/>}></Route>
            </Route>

        </Routes>
        </>
    )
}