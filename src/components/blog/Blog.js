import React from "react";
import {useState} from "react"
import { Outlet } from "react-router-dom";
import Posts from "./Posts";


export default function Blog({data}){
    

    return(
    <>
    <div className="blog">
        <div className="posts">
            <Outlet/>
        </div>
        
    </div>
    </>)
}