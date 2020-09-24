import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

function App() {
  const APIURL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
  const SEARCHAPI =
    'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   fetch(APIURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data);
  //     });
  // }, []);

  const getMovies = async (API) => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();

    getMovies(SEARCHAPI + searchTerm);

    setSearchTerm('');
  };

  return (
    <>
      <header>
        <form onSubmit={handlerSubmit}>
          <input
            type='text'
            placeholder='Search...'
            className='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
      <div className='movies'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  );
}

export default App;
