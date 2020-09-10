import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Films from '../pages/films'
import Locations from '../pages/locations'
import FilmDetail from '../pages/filmDetail'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/films">
        <Films />
      </Route>
      <Route path="/film/:id">
        <FilmDetail />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/peoples">
        <Films />
      </Route>
      <Route path="/specieses">
        <Films />
      </Route>
      <Route path="/vehicles">
        <Films />
      </Route>
    </Switch>
  )
}

export default AppRoutes
