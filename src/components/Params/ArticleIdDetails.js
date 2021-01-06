import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ArticleId() {

  const params = useParams();
  const [article, setArticle] = useState ({
    data: [],
    status: "idle",
  });
  const url = `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${params.articleId}`;

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(url);
      console.log(response);
      setArticle({ status: "success", data: response.data });
    }

    fetchDetails();
  }, [url]);

  console.log("TEXT", article.data);

  console.log("what are my params", params);
  if (!article) return "loading";

  console.log("WHAT ARE PARAMS:", params); // -> what data? object, string?

  return (
    <div>
      <h1>{article.data.title}</h1>
      <p>Author: {article.data.author}</p>
      <p><strong>Category</strong>: {article.data.categoryId}</p>
      <p>{article.data.content}</p>
      <img src={article.data.imgUrl} alt='miss' />
    </div>
  ); 
  } 
