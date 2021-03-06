import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Pages/Home'
import PokemonDetails from './Pages/PokemonDetails'

function App () {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokemonDetails/:name">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App
