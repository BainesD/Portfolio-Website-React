import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function FullPost(props){
let {date} = useParams();

useEffect(()=>{},[date]);

    return(
        <>
        <div className="post-full">
            <img src={props.image}/>
        </div>
        </>
    )
}