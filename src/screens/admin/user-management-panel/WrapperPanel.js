import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Sidebar from 'components/admin/user-management-panel/sidebar'
import { Main, Wrapper } from 'styles/common/Common.styles'
import { Header } from 'components/admin/user-management-panel/header'
import { NetworksScreen, NetworksEditScreen } from './networks-screen'
import { TrademarksScreen, TrademarksEditScreen } from './trademarks-screen'
import {
  SchoolClassesScreen,
  SchoolClassesEditScreen
} from './school-classes-screen'
import { SchoolsScreen, SchoolsScreenEdit } from './schools-screen'
import { AdminScreen, AdminEditScreen } from './admin-screen'
import { DirectorsScreen, DirectorsEditScreen } from './directors-screen'
import {
  CoordinatorsScreen,
  CoordinatorsEditScreen
} from './coordinators-screen'
import { TeachersScreen, TeachersEditScreen } from './teachers-screen'
import { StudentsScreen, StudentsEditScreen } from './students-screen'
import { EmployeesScreen, EmployeesEditScreen } from './employees-screen'
import { FellowsScreen, FellowsEditScreen } from './fellows-screen'

import {
  USER_MANAGEMENT_PANEL_NETWORKS_PATH,
  USER_MANAGEMENT_PANEL_TRADEMARKS_PATH,
  USER_MANAGEMENT_PANEL_SCHOOLS_PATH,
  USER_MANAGEMENT_PANEL_SCHOOL_CLASSES_PATH,
  USER_MANAGEMENT_PANEL_ADMIN_PATH,
  USER_MANAGEMENT_PANEL_DIRECTORS_PATH,
  USER_MANAGEMENT_PANEL_COORDINATORS_PATH,
  USER_MANAGEMENT_PANEL_TEACHERS_PATH,
  USER_MANAGEMENT_PANEL_STUDENTS_PATH,
  USER_MANAGEMENT_PANEL_EMPLOYEES_PATH,
  USER_MANAGEMENT_PANEL_FELLOWS_PATH,
  USER_MANAGEMENT_PANEL_NETWORKS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_TRADEMARKS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_SCHOOLS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_SCHOOLS_CLASSES_EDIT_PATH,
  USER_MANAGEMENT_PANEL_ADMIN_EDIT_PATH,
  USER_MANAGEMENT_PANEL_DIRECTORS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_COORDINATORS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_TEACHERS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_STUDENTS_EDIT_PATH,
  USER_MANAGEMENT_PANEL_EMPLOYEES_EDIT_PATH,
  USER_MANAGEMENT_PANEL_FELLOWS_EDIT_PATH
} from 'routes'

const WrapperPanel = () => {
  const routes = [
    { path: USER_MANAGEMENT_PANEL_NETWORKS_PATH, component: NetworksScreen },
    {
      path: USER_MANAGEMENT_PANEL_NETWORKS_EDIT_PATH,
      component: NetworksEditScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_TRADEMARKS_PATH,
      component: TrademarksScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_TRADEMARKS_EDIT_PATH,
      component: TrademarksEditScreen
    },

    { path: USER_MANAGEMENT_PANEL_SCHOOLS_PATH, component: SchoolsScreen },
    {
      path: USER_MANAGEMENT_PANEL_SCHOOLS_EDIT_PATH,
      component: SchoolsScreenEdit
    },

    {
      path: USER_MANAGEMENT_PANEL_SCHOOL_CLASSES_PATH,
      component: SchoolClassesScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_SCHOOLS_CLASSES_EDIT_PATH,
      component: SchoolClassesEditScreen
    },
    { path: USER_MANAGEMENT_PANEL_ADMIN_PATH, component: AdminScreen },
    {
      path: USER_MANAGEMENT_PANEL_ADMIN_EDIT_PATH,
      component: AdminEditScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_DIRECTORS_PATH,
      component: DirectorsScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_DIRECTORS_EDIT_PATH,
      component: DirectorsEditScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_COORDINATORS_PATH,
      component: CoordinatorsScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_COORDINATORS_EDIT_PATH,
      component: CoordinatorsEditScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_TEACHERS_PATH,
      component: TeachersScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_TEACHERS_EDIT_PATH,
      component: TeachersEditScreen
    },
    { path: USER_MANAGEMENT_PANEL_STUDENTS_PATH, component: StudentsScreen },
    {
      path: USER_MANAGEMENT_PANEL_STUDENTS_EDIT_PATH,
      component: StudentsEditScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_EMPLOYEES_PATH,
      component: EmployeesScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_EMPLOYEES_EDIT_PATH,
      component: EmployeesEditScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_FELLOWS_PATH,
      component: FellowsScreen
    },
    {
      path: USER_MANAGEMENT_PANEL_FELLOWS_EDIT_PATH,
      component: FellowsEditScreen
    }
  ]

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))

  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Header />
        <Switch>{routeComponents}</Switch>
      </Main>
    </Wrapper>
  )
}

export default WrapperPanel
