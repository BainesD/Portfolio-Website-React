import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Posts({ data }) {
  const allData = data.map((post, index) => (
    <div className="home">
      <div className="container">
        <Link className="post-link" to={`/blog/${index}`}>
          <div key={index} className="post">
            <div className="container-post__image">
              <img className="post-image" src={post.image} />
            </div>
            <div className="post-body">
              <div className="post-title">
                <h1>{post.title}</h1>
              </div>
              <div className="post-date">
                <h6>{post.date.replaceAll("-", "/")}</h6>
              </div>
              <div className="post-text">
                <p>{post.body[0]}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ));

  return <>{allData}</>;
}
