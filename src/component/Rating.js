import React from 'react'
import {Rate} from 'antd'


const desc=['terrible','bad','normal','good','wonderful']
const Rating = ({MovieRating , isMovieRating , setRating , rating}) => {
    
    const handelChange = value => {
      
        setRating(value)
    };
  return (
    isMovieRating ?( 
   <span className='RatingContent'>
    <Rate disabled value={MovieRating} />
   </span>
    ):( 
   <sapn className ='ratiContent'>
   <Rate tooltips={desc} onChange={handelChange} value={rating}/>
   </sapn>

  ))
}

export default Rating