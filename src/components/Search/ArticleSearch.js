import React from 'react';
import { Link } from "react-router-dom";

export const ArticleSearch = (props) => {
  return (
    <div className='list'>
      <div className='image'>
        <img src={props.imgUrl} alt='error' />
        </div>
        <Link to={`/${props.id}/articles`}>
            <h2>{props.title}</h2>
        </Link>
        <div className='list-info'>
      <p>{props.author}</p>
      <p>Category : <strong>{props.categoryId}</strong></p> 
      <p>Published date: {props.date}</p> 
      </div>
      </div>
  )
}

export default ArticleSearch;
