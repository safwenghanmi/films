import React from 'react';
import Card from 'react-bootstrap/Card';
import MovieRating from './Rating'; 
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  
  return (
    <div>
      <Link to={`/detail/${movie.id}`}>
      <Card className='moviecard' style={{ width: '18rem'}}   >
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <MovieRating MovieRating={movie.rate} isMovieRating={true} /> 
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
}

export default MovieCard;
