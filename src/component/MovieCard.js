import React from 'react'
import Card from 'react-bootstrap/Card';

const MovieCard = ({movie}) => {
  return (
    <div>
        <Card className='moviecard' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
             </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard