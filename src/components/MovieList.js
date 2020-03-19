import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {
          movies.map((movie, key) => {
            return <li key={key}>{movie.Title}</li>
          })
        }
      </ul>
    </>
  )
}

export default MovieList;