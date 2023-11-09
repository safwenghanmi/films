
import { useState } from 'react';
import './App.css';
import { moviesData } from './component/Data';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './component/AddMovie';
import Filtre from './component/Filtre';
import FiltreByRate from './component/Rating';

function App() {
const [movies,setmovies]=useState(moviesData)
const [inputSearsh,setInputSearsh]=useState("")
const [rating,setRating]=useState(1);
const add=(newmovie)=> 
setmovies([...movies,newmovie])
  return (
    <div className="App">
<div className='nav'>
    <AddMovie add={add}/>
    <FiltreByRate isMovieRating={false} rating={rating} setRating={setRating} />
  <Filtre inputSearsh={inputSearsh} setInputSearsh={setInputSearsh} />
  </div>
  <MovieList movies={movies} inputSearsh={inputSearsh} rating={rating}/>
  
  
    </div>
  );
}


export default App;
