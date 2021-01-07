import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function Article() {
  const params = useParams();
  const [article, setArticle] = useState ({
    data: [],
    status: "idle",
  });
  const [comments, setComments] = useState([
    {
      id: [],
      name: "idle",
      comment: "idle"
    },
  ]);

// DEFINE CALLBACK PROP
function addCommentToState(commentName, commentText) {
  const newId = Math.floor(Math.random() * 1000000000);
  console.log("DO WE HAVE THE DATA", newId, commentName, commentText);

  const newComment = {
    id: newId,
    name: commentName,
    comment: commentText
  };

  // players.push(newPlayer) -> it works, but you shouldn't
  // players.push(newPlayer);
  // console.log(players);

  // YES, like this
  // create a new array with all the players from before
  // [...players], add another player, [...players, newPlayer]
  const updatedComments = [...comments, newComment];

  setComments(updatedComments);
}

console.log(comments);


/*
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
  */

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
    setComments(response.data);
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
          <br></br>
          <br></br>
          <div>
      Comment Board
      <div>
        {comments.map((comment) => {
          return <Comment
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
          />;
        })}
      </div>
      {/* PASS CALLBACK PROP DOWN */}
      <CommentForm addCommentToState={addCommentToState} />
    </div>
        <br></br>
          <br></br>
        </div>
      </div>
  );
}
