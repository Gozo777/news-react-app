import React, { useState, useEffect } from "react";
import ArticleSearch from "./ArticleSearch";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './ArticleSearch.css';

export default function SearchPage() {
  const [articles, set_Article] = useState([]);
  const [searchText, set_searchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles`)
      .then((res) => {
        set_Article(res.data);
      })
      .catch(error => console.log(error));
  },
    []);
  
  const handleChange = (e) => {
    set_searchText(e.target.value);
    e.preventDefault();
  };

  console.log("DATA", articles)
  
  const handleOnSubmit = (e) => {
    history.push(`/searchpage/${searchText}`);
    e.preventDefault();
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchText.toLowerCase()) || article.author.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div>
      <div>
        <br></br>
      <br></br>
      <form onSubmit={handleOnSubmit}>
      <input className='search'
        placeholder="Search"
        onChange={handleChange}
        value={searchText}
        /> 
        </form>
        <h1>Total Found Articles: {filteredArticles.length}</h1>
      </div>
      <div className='list_container'>
    {filteredArticles.map(article => {
      return (
        <ArticleSearch
          key={article.id}
          id={article.id}
          title={article.title}
          author={article.author}
          categoryId={article.categoryId}
          date={article.date}
          imgUrl={article.imgUrl}
        />
      );
    })}
        </div>
    </div>
  );
}