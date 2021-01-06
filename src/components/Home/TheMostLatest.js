import React from 'react';
import { Link } from "react-router-dom";
import './TheMostLatest.css';

export const TheMostLatest = (props) => {
  return (
      <div className='mostlatest'>
        <div className='image'>
        <img src={props.imgUrl} alt='error' />
      </div>
        <Link to={`/${props.id}`}>
            <h2>{props.title}</h2>
        </Link>
        <div className='mostlatest-info'>
          <p>Author: {props.author}</p>

          <Link to={`/categories/${props.categoryId}`}>
            <p>{props.categoryId}</p>
            </Link>

          <p>Published date: {props.date}</p>
        </div>
        </div>
  )
}

export default TheMostLatest;