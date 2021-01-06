import React from "react";
import { useParams } from "react-router-dom";
import '../Home/Latest';

export default function CategoryId() {

  const params = useParams();

  const url = `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${params.categoryId}`;
    
  return (
    <div>
      <h1>
        {params.categoryId}
      </h1>
    </div>
  )
}

