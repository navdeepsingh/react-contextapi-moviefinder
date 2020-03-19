import React, { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    { "Title": "Iron Man", "Year": "2008", "imdbID": "tt0371746", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" }, { "Title": "Iron Man 3", "Year": "2013", "imdbID": "tt1300854", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg" }, { "Title": "Iron Man 2", "Year": "2010", "imdbID": "tt1228705", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg" }, { "Title": "The Iron Giant", "Year": "1999", "imdbID": "tt0129167", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxNDU2Njk0OV5BMl5BanBnXkFtZTgwODc3Njc3NjE@._V1_SX300.jpg" }, { "Title": "The Man in the Iron Mask", "Year": "1998", "imdbID": "tt0120744", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Iron Fist", "Year": "2017–2018", "imdbID": "tt3322310", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg" }, { "Title": "The Iron Lady", "Year": "2011", "imdbID": "tt1007029", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg" }, { "Title": "Iron Sky", "Year": "2012", "imdbID": "tt1034314", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg" }, { "Title": "The Man with the Iron Fists", "Year": "2012", "imdbID": "tt1258972", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg" }, { "Title": "3-Iron", "Year": "2004", "imdbID": "tt0423866", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM1ODIwNzM5OV5BMl5BanBnXkFtZTcwNjk5MDkyMQ@@._V1_SX300.jpg" }
  ])
  return (
    <>
      <div className="container">
        <h1>Context API : Movie Finder</h1>
        <div className="row">
          <div className="col">
            <MovieSearch />
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

