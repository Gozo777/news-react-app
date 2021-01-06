import React from 'react';
import { Link } from "react-router-dom";
import './Latest.css';

export const Latest = (props) => {
  return (
    <div className='latest'>
      <div className='image'>
        <img src={props.imgUrl} alt='error' />
        </div>
          <Link to={`/${props.id}`}>
            <h2>{props.title}</h2>
      </Link>
      <div className='latest-info'>
          <p>Author: {props.author}</p>

        <Link to={`/categories/${props.categoryId}`}>
            <p>{props.categoryId}</p>
        </Link>

          <p>Published date: {props.date}</p>
      </div>
      </div>
  )
}

export default Latest;