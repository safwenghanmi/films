import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Det from '../component/Det'
import Erreur from './Erreur'

const Home = () => {
  return (
    <div>
      <Routes>
      <Route exact path='/' Component={App}  />
      <Route path='/detail/:id' Component={Det} />
      <Route path='*' Component={Erreur} />
      </Routes>
    
    </div>
  )
}

export default Home