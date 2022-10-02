import React from "react";

export default function Post({data}){

const allData = data.map((post,index)=> (
    <div key={index} className="post">
        
        <div className="container-post__image"><img className="post-image" src={post.image}/></div>
        <div className="post-body">
            <div className="post-title"><h1>{post.title}</h1></div>
            <div className="post-date"><h6>{post.date}</h6></div>
            <div className="post-text"><p >{post.body}</p></div>
        </div>
    </div>
))    

    return(<>
          {allData}
    </>)
}