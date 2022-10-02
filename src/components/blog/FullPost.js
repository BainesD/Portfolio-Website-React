import React, { useEffect } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";

export default function FullPost({ data }) {
  let { postSlug } = useParams();

  useEffect(() => {}, [postSlug]);

  const post = data[parseInt(postSlug)];

  const postBody = post.body.map((paragraph) => (
    <ReactMarkdown className="article-text">{paragraph}</ReactMarkdown>
  ));

  function monthFinder(a) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month = parseInt(a.substring(0,2));

    return `${months[month-1]} ${a.substring(3,5)}, ${a.substring(6)}`;
    
  }

  return (
    <>
      <div>
        <article id={post.id}>
          <img className="article-image" src={post.image} />
          <h1 className="article-title">{post.title}</h1>
          <h6 className="article-date">{monthFinder(post.date)}</h6>
          <br/>
          {postBody}
        </article>
      </div>
    </>
  );
}
