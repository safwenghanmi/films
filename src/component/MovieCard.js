import React from 'react';
import Card from 'react-bootstrap/Card';
import MovieRating from './Rating'; 

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card className='moviecard' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <MovieRating MovieRating={movie.rate} isMovieRating={true} /> 
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
