import React from "react";
import {useState} from "react"
import Post from "./Post";

export default function Blog({data}){
    

    return(
    <>
    <div className="blog">
        <div className="posts">
            <Post data={data}/>
        </div>
    </div>
    </>)
}