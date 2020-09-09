import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Films from '../pages/films'
import ArticleDetail from '../pages/detail'

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/films">
        <Films />
      </Route>
      <Route path="/locations">
        <ArticleDetail />
      </Route>
      <Route path="/people">
        <ArticleDetail />
      </Route>
      <Route path="/species">
        <ArticleDetail />
      </Route>
      <Route path="/vehicles">
        <ArticleDetail />
      </Route>
      <Route path="/article/:id">
        <ArticleDetail />
      </Route>
    </Switch>
  )
}

export default AppRoutes
