import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SingleHero from './pages/SingleHero'
import './index.css'

const getStorageFavorites = () => {
  let favorite = ''
  if (localStorage.getItem('favorite')) {
    favorite = localStorage.getItem('favorite')
  }
  return favorite
}

function App() {
  return (
    <>
      <Router basename='/marvelAPI-react'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/hero/:id'>
            <SingleHero />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
