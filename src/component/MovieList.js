import React from 'react'
import MovieCard from './MovieCard'
import './Mvl.css';

const MovieList = ({movies}) => {
  return (
    <div className='MovieList'>
        
        {movies.map((movie,index) => (<MovieCard movie={movie} key={movie.id}/>))}
    </div>
  )
}

export default MovieList