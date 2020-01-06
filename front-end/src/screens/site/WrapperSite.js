import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from 'components/site/header'

import { HomeScreen } from './home'
import SearchResults from './search-results'

import { SITE_PATH, SITE_SEARCH_RESULTS_PATH } from 'routes'

const WrapperSite = () => {
  const routes = [
    { path: SITE_PATH, component: HomeScreen },
    {
      path: SITE_SEARCH_RESULTS_PATH(),
      component: SearchResults
    },
  ]

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))

  return (
    <>
      <Header />
      <Switch>{routeComponents}</Switch>
    </>
  )
}

export default WrapperSite
