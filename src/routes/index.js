import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

export const ROOT_PATH = '/app'

//PORTFOLIO ROUTES
export const PORTFOLIO_PATH = ROOT_PATH + '/home'

//SITE ROUTES
export const SITE_PATH = ROOT_PATH + '/biblioteca'
export const SITE_SEARCH_RESULTS_PATH = term =>
  `${SITE_PATH}/busca/${term || ':term'}`

//LEAGUE ROUTES
export const LEAGUE_PATH = ROOT_PATH + '/liga'
export const LEAGUE_TUTORIAL_PATH = LEAGUE_PATH + '/tutorial'
export const LEAGUE_VACATION_PATH = LEAGUE_PATH + '/ferias'

//LOGIN ROUTES
export const LOGIN_PATH = `${ROOT_PATH}/login`
export const LOGOUT_PATH = `${ROOT_PATH}/logout`

//RECOVERY ROUTES
export const FORGOT_LOGIN_PATH = `${ROOT_PATH}/recuperar-acesso`
export const CHOOSE_USER_TYPE_PATH = `${FORGOT_LOGIN_PATH}/tipo-de-usuario`
export const CHOOSE_RECOVER_METHOD_PATH = `${FORGOT_LOGIN_PATH}/como`
export const SELECT_SECRET_QUESTION_PATH = `${FORGOT_LOGIN_PATH}/pergunta-secreta`
export const SECRET_QUESTION_ANSWER_PATH = `${FORGOT_LOGIN_PATH}/resposta`
export const RECOVERY_SUCCESS_PATH = `${FORGOT_LOGIN_PATH}/sucesso`
export const RECOVERY_ERROR_PATH = `${FORGOT_LOGIN_PATH}/nao-encontrado`
export const SELECT_SCHOOL_STATE_PATH = `${FORGOT_LOGIN_PATH}/estado`
export const SELECT_SCHOOL_CITY_PATH = `${FORGOT_LOGIN_PATH}/cidade`
export const SELECT_SCHOOL_NAME_PATH = `${FORGOT_LOGIN_PATH}/escola`
export const SELECT_SCHOOL_YEAR_PATH = `${FORGOT_LOGIN_PATH}/ano-escolar`
export const FIRST_NAME_ANSWER_PATH = `${FORGOT_LOGIN_PATH}/primeiro-nome`
export const RECOVER_VIA_EMAIL_PATH = `${FORGOT_LOGIN_PATH}/recuperar-com-email`
export const RECOVER_VIA_EMAIL_CONFIRMATION_PATH = `${RECOVER_VIA_EMAIL_PATH}/enviado`
export const RECOVER_VIA_CELLPHONE_PATH = `${FORGOT_LOGIN_PATH}/recuperar-com-celular`
export const RECOVER_VIA_CELLPHONE_CONFIRMATION_PATH = `${RECOVER_VIA_CELLPHONE_PATH}/enviado`

//ROUTES USER MANAGEMENT PANEL
export const USER_MANAGEMENT_ROOT_PATH = ROOT_PATH + '/gerenciar-usuarios'
export const USER_MANAGEMENT_PANEL_CREATE_PATH = '/info/adicionar'
export const USER_MANAGEMENT_PANEL_EDIT_PATH = `/info/:id`

export const USER_MANAGEMENT_PANEL_NETWORKS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/redes`
export const USER_MANAGEMENT_PANEL_NETWORKS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_NETWORKS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_NETWORKS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_NETWORKS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_TRADEMARKS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/marcas`
export const USER_MANAGEMENT_PANEL_TRADEMARKS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_TRADEMARKS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_TRADEMARKS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_TRADEMARKS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_SCHOOLS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/unidades`
export const USER_MANAGEMENT_PANEL_SCHOOLS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_SCHOOLS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_SCHOOLS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_SCHOOLS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_SCHOOL_CLASSES_PATH = `${USER_MANAGEMENT_ROOT_PATH}/turmas`
export const USER_MANAGEMENT_PANEL_SCHOOLS_CLASSES_CREATE_PATH =
  USER_MANAGEMENT_PANEL_SCHOOL_CLASSES_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_SCHOOLS_CLASSES_EDIT_PATH =
  USER_MANAGEMENT_PANEL_SCHOOL_CLASSES_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_ADMIN_PATH = `${USER_MANAGEMENT_ROOT_PATH}/admin`
export const USER_MANAGEMENT_PANEL_ADMIN_CREATE_PATH =
  USER_MANAGEMENT_PANEL_ADMIN_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_ADMIN_EDIT_PATH =
  USER_MANAGEMENT_PANEL_ADMIN_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_DIRECTORS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/diretores`
export const USER_MANAGEMENT_PANEL_DIRECTORS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_DIRECTORS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_DIRECTORS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_DIRECTORS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_COORDINATORS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/coordenadores`
export const USER_MANAGEMENT_PANEL_COORDINATORS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_COORDINATORS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_COORDINATORS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_COORDINATORS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_TEACHERS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/professores`
export const USER_MANAGEMENT_PANEL_TEACHERS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_TEACHERS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_TEACHERS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_TEACHERS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_STUDENTS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/alunos`
export const USER_MANAGEMENT_PANEL_STUDENTS_CREATE_PATH =
  USER_MANAGEMENT_PANEL_STUDENTS_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_STUDENTS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_STUDENTS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_EMPLOYEES_PATH = `${USER_MANAGEMENT_ROOT_PATH}/funcionarios`
export const USER_MANAGEMENT_PANEL_EMPLOYEES_CREATE_PATH =
  USER_MANAGEMENT_PANEL_EMPLOYEES_PATH + USER_MANAGEMENT_PANEL_CREATE_PATH
export const USER_MANAGEMENT_PANEL_EMPLOYEES_EDIT_PATH =
  USER_MANAGEMENT_PANEL_EMPLOYEES_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

export const USER_MANAGEMENT_PANEL_FELLOWS_PATH = `${USER_MANAGEMENT_ROOT_PATH}/bolsistas`
export const USER_MANAGEMENT_PANEL_FELLOWS_EDIT_PATH =
  USER_MANAGEMENT_PANEL_FELLOWS_PATH + USER_MANAGEMENT_PANEL_EDIT_PATH

import Login from 'screens/login'
import Logout from 'screens/logout'
import {
  ForgotLogin,
  SecretQuestionAnswer,
  SelectSecretQuestion,
  EmailAnswer,
  VerifyEmail,
  RecoverySuccess,
  SelectStateAnswer,
  SelectCityAnswer,
  SchoolNameAnswer,
  SelectSchoolYear,
  UserFirstNameAnswer,
  RecoveryError,
  ChooseUserType,
  CellphoneAnswer,
  VerifyCellphone,
  ResetPassword
} from 'screens/login'

import WrapperPanel from 'screens/admin/user-management-panel/WrapperPanel'
import WrapperSite from 'screens/site/WrapperSite'
import WrapperPortfolio from 'screens/portfolio/WrapperPortfolio'
import League from 'screens/league'
import LeagueTutorial from 'screens/league-tutorial'
import LeagueVacation from 'screens/league-vacation'

const Routes = () => (
  <BrowserRouter>
    <Route path={'/'} exact render={() => <Redirect to={PORTFOLIO_PATH} />} />
    <Route
      path={ROOT_PATH}
      exact
      render={() => <Redirect to={PORTFOLIO_PATH} />}
    />
    <Route path={FORGOT_LOGIN_PATH} exact component={ForgotLogin} />
    <Route path={LOGIN_PATH} component={Login} />
    <Route path={LOGOUT_PATH} exact component={Logout} />
    <Route path={CHOOSE_RECOVER_METHOD_PATH} exact component={ForgotLogin} />
    <Route
      path={SECRET_QUESTION_ANSWER_PATH}
      exact
      component={SecretQuestionAnswer}
    />
    <Route
      path={SELECT_SECRET_QUESTION_PATH}
      exact
      component={SelectSecretQuestion}
    />
    <Route
      path={RECOVER_VIA_EMAIL_CONFIRMATION_PATH}
      exact
      component={VerifyEmail}
    />
    <Route
      path={RECOVER_VIA_CELLPHONE_CONFIRMATION_PATH}
      exact
      component={VerifyCellphone}
    />
    <Route path={RECOVER_VIA_EMAIL_PATH} exact component={EmailAnswer} />
    <Route
      path={RECOVER_VIA_CELLPHONE_PATH}
      exact
      component={CellphoneAnswer}
    />
    <Route path={RECOVERY_SUCCESS_PATH} exact component={RecoverySuccess} />
    <Route path={RECOVERY_ERROR_PATH} exact component={RecoveryError} />
    <Route
      path={SELECT_SCHOOL_STATE_PATH}
      exact
      component={SelectStateAnswer}
    />
    <Route path={SELECT_SCHOOL_CITY_PATH} exact component={SelectCityAnswer} />
    <Route path={SELECT_SCHOOL_NAME_PATH} exact component={SchoolNameAnswer} />
    <Route path={SELECT_SCHOOL_YEAR_PATH} exact component={SelectSchoolYear} />
    <Route path={CHOOSE_USER_TYPE_PATH} exact component={ChooseUserType} />
    <Route
      path={FORGOT_LOGIN_PATH + '/recuperar-senha'}
      exact
      component={ResetPassword}
    />
    <Route
      path={FIRST_NAME_ANSWER_PATH}
      exact
      component={UserFirstNameAnswer}
    />

    {/*admin routes*/}
    <Route path={USER_MANAGEMENT_ROOT_PATH} component={WrapperPanel} />

    {/*site home routes*/}
    <Route path={SITE_PATH} component={WrapperSite} />

    {/*site home routes*/}
    <Route path={LEAGUE_PATH} exact component={League} />
    <Route path={LEAGUE_TUTORIAL_PATH} exact component={LeagueTutorial} />
    <Route path={LEAGUE_VACATION_PATH} exact component={LeagueVacation} />

    {/*portfolio routes*/}
    <Route path={PORTFOLIO_PATH} component={WrapperPortfolio} />
  </BrowserRouter>
)

export default Routes
