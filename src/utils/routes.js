import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Films from '../pages/films'
import Locations from '../pages/locations'
import Peoples from '../pages/peoples'
import Specieses from '../pages/specieses'
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
        <Peoples />
      </Route>
      <Route path="/specieses">
        <Specieses />
      </Route>
    </Switch>
  )
}

export default AppRoutes
