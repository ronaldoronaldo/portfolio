import React, { useState } from 'react'
import { Title } from 'components/lib/titles'
import { Button } from 'components/lib/buttons'
import { colors } from 'config/ui'
import { BackButton } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import BorderOr from 'components/lib/borderOr'
import { withApollo } from 'react-apollo'
import { Alert } from 'components/lib/alerts'
import logoGoogle from 'assets/images/icon-google.svg'
import logoMicrosoft from 'assets/images/icon-microsoft.svg'
import getQueryStringValue from 'utils/getQueryStringValue'

import {
  signInOrGetUserMutation,
  signInWithPasswordMutation,
  authenticateWithProviderMutation
} from 'api/mutations'
import { availableProductsQuery } from 'api/queries'
import {
  ContainerStyle,
  ContainerLeftStyle,
  ContainerRightStyle,
  ContainerHasEmailStyle,
  ContainerNotMe,
  ContainerButtonSiginInStyle,
  ContainerButtonsRow,
  ContainerButtonRecovery
} from './Login.style'
import GoogleLogin from 'react-google-login'
import { CHOOSE_USER_TYPE_PATH, SITE_PATH } from 'routes'
import { UserAgentApplication } from 'msal/lib-es6'
import { LOGIN_JWT } from 'config/vars'
import IconButton from 'components/lib/buttons/IconButton'
import { redirectToPlatform } from 'utils/redirects'

const LOGIN_REQUIRES_PASSWORD = 'requires_password'
const LOGIN_TOKEN = 'token'
const USER_NOT_FOUND = 'Usuário não encontrado'

const msalConfig = {
  auth: {
    clientId: '79ecb6ed-cfb1-4b58-b37e-86034db3dae9',
    authority: 'https://login.microsoftonline.com/common'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
}

const myMSALObj = new UserAgentApplication(msalConfig)

const Login = ({ client, ...props }) => {
  const [hasEmail, setHasEmail] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [alertData, setAlertData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLoginChange = event => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const setToken = val => {
    global.localStorage.setItem(LOGIN_JWT, val)
  }

  const handleLoginSubmit = () => {
    setIsLoading(true)

    client
      .mutate({
        mutation: signInOrGetUserMutation,
        variables: {
          deviceId: '12345',
          deviceType: 'BROWSER',
          identity: login
        }
      })
      .then(res => {
        setIsLoading(false)

        const { signInOrGetUser } = res.data

        if (!signInOrGetUser) {
          console.log('resolve with error')
        }

        if (signInOrGetUser.type === LOGIN_REQUIRES_PASSWORD) {
          setHasEmail(true)
          setUserName(signInOrGetUser.name)
        }

        if (signInOrGetUser.type === LOGIN_TOKEN) {
          saveTokenAndGetUser(signInOrGetUser.value)
        }
      })
      .catch(err => {
        setIsLoading(false)

        if (err.graphQLErrors) {
          const userNotFound = err.graphQLErrors.find(
            graphqlError => graphqlError.message === USER_NOT_FOUND
          )

          if (userNotFound) {
            setAlertData({
              title: 'Ops',
              message: USER_NOT_FOUND,
              textButton: 'Ok'
            })
          }
        }
      })
  }

  const handlePasswordSubmit = () => {
    setIsLoading(true)

    client
      .mutate({
        mutation: signInWithPasswordMutation,
        variables: {
          deviceId: '12345',
          deviceType: 'BROWSER',
          identity: login,
          password: password
        }
      })
      .then(res => {
        setIsLoading(false)

        const { signInWithPassword } = res.data

        if (signInWithPassword) {
          saveTokenAndGetUser(signInWithPassword)
        }
      })
      .catch(err => {
        setIsLoading(false)

        if (err.graphQLErrors) {
          showErrorAlert(err)
        }
      })
  }

  const saveTokenAndGetUser = token => {
    setToken(token)
    setIsLoading(true)

    client
      .query({
        query: availableProductsQuery
      })
      .then(res => {
        const { availableProducts } = res.data.me
        const hasAllProducts = availableProducts.length === 2

        if (props.location.search) {
          const redirectTo = getQueryStringValue('redirectTo')
          const platform = getQueryStringValue('platform')

          const isArvore = platform === 'arvore'
          const isGuten = platform === 'guten'

          if (platform.length > 0 && redirectTo.length > 0) {
            const standardPlatformRoute =
              redirectTo === '/biblioteca' ||
              redirectTo === '/webapp/' ||
              redirectTo === '/webapp/home'

            if (hasAllProducts && standardPlatformRoute) {
              return props.history.push(SITE_PATH)
            }

            if (isArvore) redirectToPlatform('arvore', redirectTo)
            if (isGuten) redirectToPlatform('guten', redirectTo)
          } else if (platform.length > 0 && !hasAllProducts) {
            if (isArvore) redirectToPlatform('arvore')

            if (isGuten) redirectToPlatform('guten')
          } else {
            props.history.push(SITE_PATH)
          }
        } else {
          if (hasAllProducts) {
            return props.history.push(SITE_PATH)
          }

          if (availableProducts[0] === 'arvore') {
            redirectToPlatform('arvore')
          }

          if (availableProducts[0] === 'guten') {
            redirectToPlatform('guten')
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const showErrorAlert = err => {
    setAlertData({
      title: 'Ops',
      message: err.graphQLErrors
        .map(graphqlError => `- ${graphqlError.message}`)
        .join('\n'),
      textButton: 'Ok'
    })
  }

  const prevStep = () => {
    setHasEmail(false)
    setLogin('')
    setPassword('')
  }

  const responseGoogle = data => {
    if (!data.accessToken) {
      return
    }

    setIsLoading(true)

    client
      .mutate({
        mutation: authenticateWithProviderMutation,
        variables: {
          deviceId: '12345',
          deviceType: 'BROWSER',
          provider: 'GOOGLE',
          token: data.accessToken
        }
      })
      .then(res => {
        if (res.data.authenticateWithProvider) {
          saveTokenAndGetUser(res.data.authenticateWithProvider)
        }
      })
      .catch(err => {
        setIsLoading(false)

        if (err.graphQLErrors) {
          showErrorAlert(err)
        }
      })
  }

  const handleMSBtnClick = () => {
    const requestObj = {
      scopes: ['user.read']
    }

    myMSALObj
      .loginPopup(requestObj)
      .then(loginResponse => {
        myMSALObj
          .acquireTokenSilent(requestObj)
          .then(tokenResponse => {
            setIsLoading(true)

            client
              .mutate({
                mutation: authenticateWithProviderMutation,
                variables: {
                  deviceId: '12345',
                  deviceType: 'BROWSER',
                  provider: 'MICROSOFT',
                  token: tokenResponse.accessToken
                }
              })
              .then(res => {
                if (res.data.authenticateWithProvider) {
                  saveTokenAndGetUser(res.data.authenticateWithProvider)
                }
              })
              .catch(err => {
                setIsLoading(false)

                if (err.graphQLErrors) {
                  showErrorAlert(err)
                }
              })
          })
          .catch(error => {
            console.log('acquireTokenSilent error', error)
          })
      })
      .catch(error => {
        alert('Erro ao tentar logar com sua conta Microsoft')
      })
  }

  return (
    <ContainerStyle>
      {alertData && (
        <Alert
          title={alertData.title}
          message={alertData.message}
          textButton={alertData.textButton}
          onClick={() => setAlertData(null)}
          loading={isLoading}
        />
      )}
      <ContainerLeftStyle>
        <ContainerHasEmailStyle>
          {hasEmail && (
            <React.Fragment>
              <BackButton
                onClick={prevStep}
                style={{
                  marginTop: 32,
                  marginLeft: 16,
                  position: 'absolute',
                  left: 0,
                  top: -15
                }}
              />
              <ContainerNotMe>
                <Title
                  text={`Olá, ${userName}`}
                  size={2}
                  style={{ margin: 0 }}
                />
                <Button
                  text="Não sou eu"
                  size="small"
                  width={126}
                  color={colors.black4}
                  bgColor={colors.white}
                  bgColorHover={'none'}
                  textColorHover={colors.black4Dark}
                  onClick={prevStep}
                />
              </ContainerNotMe>
            </React.Fragment>
          )}
        </ContainerHasEmailStyle>

        <ContainerButtonSiginInStyle>
          <Input
            id={'login'}
            type={!hasEmail ? 'text' : 'password'}
            value={!hasEmail ? login : password}
            placeholder={!hasEmail ? 'E-mail ou código de acesso' : 'Sua senha'}
            style={{ marginBottom: 16 }}
            secureTextEntry={!hasEmail ? false : true}
            onSubmit={() => console.log('ok')}
            onKeyUp={evt => {
              if (evt.key === 'Enter') {
                return !hasEmail ? handleLoginSubmit() : handlePasswordSubmit()
              }
            }}
            onChange={!hasEmail ? handleLoginChange : handlePasswordChange}
          />
          <Button
            text="Avançar"
            loading={isLoading}
            onClick={!hasEmail ? handleLoginSubmit : handlePasswordSubmit}
            bgColorLoading={colors.primary}
          />
        </ContainerButtonSiginInStyle>
        <BorderOr />
        <ContainerButtonsRow>
          <GoogleLogin
            clientId="606825167741-dl9bhslm0t9jld59k97p4lnvj2vhrv0s.apps.googleusercontent.com"
            render={renderProps => (
              <IconButton
                text="Google"
                bgColor={colors.white}
                color={colors.black5}
                border={`.5px solid ${colors.black2};`}
                style={{ marginRight: 16, height: 48 }}
                bgColorHover={'none'}
                textColorHover={colors.black3Dark}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled || isLoading}
                iconImgSrc={logoGoogle}
              />
            )}
            onSuccess={responseGoogle}
            onFailure={obj => console.log('error on google signin', obj)}
            cookiePolicy={'single_host_origin'}
          />
          <IconButton
            text="Microsoft"
            bgColor={colors.white}
            color={colors.black5}
            border={`.5px solid ${colors.black2};`}
            bgColorHover={'none'}
            disabled={isLoading}
            textColorHover={colors.black3Dark}
            onClick={handleMSBtnClick}
            style={{ height: 48 }}
            iconImgSrc={logoMicrosoft}
          />
        </ContainerButtonsRow>
        <ContainerButtonRecovery to={CHOOSE_USER_TYPE_PATH}>
          <Button
            text="Esqueci como entrar"
            size="small"
            color={colors.black3}
            bgColor={colors.white}
            bgColorHover={'none'}
            textColorHover={colors.black4Dark}
            onClick={prevStep}
          />
        </ContainerButtonRecovery>
      </ContainerLeftStyle>
      <ContainerRightStyle />
    </ContainerStyle>
  )
}

export default withApollo(Login)
