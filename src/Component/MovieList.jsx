import React from "react";
import "./movieList.css";

function MovieList({ Movies }) {
  return (
    <div>
      <div className="moviecontainer">
        <div className="MovieItem">
          {Movies.map((item, index) => (
            <div className="MovieCard" key={index}>
              <img src={item.Poster}></img>
              <h1>Title : {item.Title}</h1>
              <h3>Year: {item.Year}</h3>
              <h2>Type : {item.Type}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
