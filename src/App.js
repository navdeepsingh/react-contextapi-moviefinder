import React from 'react';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Context API : Movie Finder</h1>
        <div className="row">
          <div className="col">
            {
              loading ?
                <h1 className="text-center">...fetching {search} movie</h1> :
                <MovieList />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

