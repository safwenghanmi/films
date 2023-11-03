
import { useState } from 'react';
import './App.css';
import { moviesData } from './component/Data';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './component/AddMovie';
function App() {
const [movies,setmovies]=useState(moviesData)
const add=(newmovie)=> 
setmovies([...movies,newmovie])
  return (
    <div className="App">
  <MovieList movies={movies}/>
  <AddMovie add={add}/>
    </div>
  );
}


export default App;
