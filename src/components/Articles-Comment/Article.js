import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";

export default function Article() {
  const params = useParams();
  const [article, setArticle] = useState ({
    data: [],
    status: "idle",
  });
  const [comments, set_comment] = useState([]);
  const [name, set_name] = useState([]);
  const [newComment, set_newComment] = useState([]);
  const [displayComment, set_displayComment] = useState("");

  const handleThisStatus = () => {
    add_comment();
    console.log("text here:", { name }, { newComment });
    set_name("");
    set_newComment("");
  };

  async function add_comment() {
    await setTimeout(1000);
    set_displayComment(`
    name:  ${name}
    comment: ${newComment}`);
  }

  const url = `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${params.articleId}`;

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(url);
      console.log(response);
      setArticle({ status: "success", data: response.data });
    }

    fetchDetails();
  }, [url]);

  const urlComment =
  `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${params.articleId}/comments`;
  
  const getComment = async (urlComment) => {
    const response = await axios.get(urlComment);
    set_comment(response.data);
  };
 
  useEffect(() => {
    try {
      getComment(urlComment);
    } catch (err) {
      console.log("got error", err);
    }
  }, [urlComment]);

  return (
    <div> 
      <div>
      <img src={article.data.imgUrl} alt='error' />
      <h1>{article.data.title}</h1>
      <p>Author: {article.data.author}</p>
      <p><strong>Category</strong>: {article.data.categoryId}</p>
      <p>{article.data.content}</p>
        <article>
          <br></br>
          <br></br>
          <strong>Left comments by</strong>
          {comments.map((comment) => {
              return (
                <div key={comment.id}>
                  <Comment name={comment.name} comment={comment.comment} />
                </div>
              );
            })}
        </article>
        <br></br>
          <br></br>
        <p>Leave your name</p>
        <input
          onChange={(event) => set_name(event.target.value)}
          value={name}
          type="text"
          placeholder="name"
        />
        <p>Leave your comment</p>
        <input
          onChange={(event) => set_newComment(event.target.value)}
          value={newComment}
          type="text"
          placeholder="comment"
        />
        <button onClick={handleThisStatus}>Submit</button>
        <p> 
          <strong>{displayComment}</strong>
        </p>
        </div>
      </div>
  );
}
