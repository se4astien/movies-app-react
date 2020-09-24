import React from 'react';

const Movie = ({ movie }) => {
  const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

  const setVoteClass = (vote) => {
    if (vote >= 7) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className='movie'>
      <img
        src={
          movie.poster_path
            ? IMGPATH + movie.poster_path
            : 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg'
        }
      />
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <span className={setVoteClass(movie.vote_average)}>
          {movie.vote_average}
        </span>
      </div>

      {movie.overview && (
        <div className='movie-over'>
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
