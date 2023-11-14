import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { moviesData } from './Data'

const Det = () => {
    const [descrip,setdescrip]= useState({})
    const {id}=useParams();
    useEffect(() => {
        const movieD = moviesData.find((el)=> el.id == id);
        setdescrip(movieD);

    })
  return (
    <div>
         <Link to='/'>
     <Button href='/'>Home</Button>
     </Link>
        <div>
        <h1>description</h1>
        <h3>{descrip.description}</h3>
       
    </div>
    <iframe
    title='movie.trailer'
    width='560'
    height='315'
    src={descrip.trailer}
    ></iframe>
   
    </div>
  )
}

export default Det