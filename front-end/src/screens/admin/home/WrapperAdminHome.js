import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main, Wrapper } from 'styles/common/Common.styles'
import { Header } from 'components/admin/home/header'

import { ADMIN_ROOT_PATH, ADMIN_CHOOSE_CLIENT_PATH } from 'routes'

import { HomeScreen } from './home-screen'
import { ChooseClientScreen } from './choose-client-screen'

const WrapperAdminHome = () => {
  const routes = [
    { path: ADMIN_ROOT_PATH + '/home', component: HomeScreen },
    {
      path: ADMIN_CHOOSE_CLIENT_PATH,
      component: ChooseClientScreen
    }
  ]

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))

  return (
    <Wrapper>
      <Main>
        <Header />
        <Switch>{routeComponents}</Switch>
      </Main>
    </Wrapper>
  )
}

export default WrapperAdminHome
