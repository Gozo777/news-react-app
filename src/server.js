const express = require("express");
const local_database = require("./articles-comments-data.json");

const app = express();

/*
var cors = require("cors");
const { response } = require("express");
app.use(cors());
*/

//http://localhost:4000/articles get a response of an array with 6 articles
  

// http://localhost:4000/articles/:articleId get a response of a specific article

/* app.get(
  "/articles/:articleId/comments", // http://localhost:4000/articles/:articleId/comments get a response of an array of comments for a specific article get a response of a specific article

  (request, response) => {
    response.send(local_database.comments);
  }
);

//http://localhost:4000/categories/:categoryId/articles get a response of an array of articles with that categoryId

app.get(
  "/categories/:categoryId/articles",

  (request, response) => {
    response.send(local_database.comments);
  }
); 

const port = 4000;

// confirmation
function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);
*/