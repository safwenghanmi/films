import React from 'react'
import MovieCard from './MovieCard'
import './Mvl.css';

const MovieList = ({movies , inputSearsh , rating}) => {
  
  console.log('Rating:', rating);
  
  return (
    <div className='MovieList'>
        
        {movies
        .filter(movie=>movie.title.toUpperCase().includes(inputSearsh.toUpperCase())
        && movie.rate >= rating)
        .map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
        
    </div>
  )
}

export default MovieList