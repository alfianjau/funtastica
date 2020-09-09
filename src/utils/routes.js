import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Films from '../pages/films'
import FilmDetail from '../pages/detail'

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
        <Films />
      </Route>
      <Route path="/people">
        <Films />
      </Route>
      <Route path="/species">
        <Films />
      </Route>
      <Route path="/vehicles">
        <Films />
      </Route>
    </Switch>
  )
}

export default AppRoutes
