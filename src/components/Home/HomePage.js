import React, { useEffect, useState } from 'react';
import axios from "axios";
import Latest from './Latest';
import TheMostLatest from './TheMostLatest';

export default function HomePage() {

  const [articles, set_Article] = useState([]);

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles`)
      .then((res) => {
        set_Article(res.data);
      })
      .catch(error => console.log(error));
  },
    []);
  
  console.log("DATA", articles)

  var myData = [].concat(articles)
    .sort((a, b) => (a.unixTimeStamp < b.unixTimeStamp) ? 1 : -1);
  
  console.log("DATA2", myData)

  const latestUnixTimeStamp = Math.max(
    ...articles.map(function (list) {
      return list.unixTimeStamp;
    })
  );
  console.log("text:", latestUnixTimeStamp);

  var mostRecentObject = articles.filter(article =>
    article.unixTimeStamp.toLocaleString().includes(latestUnixTimeStamp.toLocaleString())
  );
  
  console.log("final", mostRecentObject)


  return (
    <div>
        <h1><strong>Check the latest article!</strong></h1>
        <div className='latest_container'>
      {mostRecentObject.map(item => {
        return (
          <TheMostLatest
            key={item.id}
            id={item.id}
            author={item.author}
            categoryId={item.categoryId}
            date={item.date}
            imgUrl={item.imgUrl}
            title={item.title}
          />
        )
      })}
        </div>
      <h2><strong>All the latest News news() articles</strong></h2>
      <div className='latest_container'>
      {myData.map(myData => {
        return (
          <Latest
            key={myData.id}
            id={myData.id}
            author={myData.author}
            categoryId={myData.categoryId}
            date={myData.date}
            imgUrl={myData.imgUrl}
            title={myData.title}
          />
        )
      })}
        </div>
      </div>
  );
}
