import React, { useState, useEffect } from "react";
import Blogpost from "./blogpost";
import axios from "axios";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios(
      "https://cors-anywhere.herokuapp.com/https://dev.to/api/articles/me/published",
      {
        method: "GET",
        headers: {
          "api-key": "PsCGj1JAJjfgM4PhvFkm7r4B",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);

  return (
    <div id="blog">
      <div className="about-blog">
        <h1>Blog</h1>

        <p className="blog-info">
          I predominantly blog about my experiences with learning the Rails
          framework, with the intention of writing a list of educational
          blogposts that I wish I'd have had when I began learning.
        </p>
        <div className="posts">
          {posts.map((post) => {
            return (
              <Blogpost
                key={post.id}
                title={post.title}
                description={post.description}
                url={post.url}
                coverImage={post.coverImage}
                taglist={post.taglist}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
