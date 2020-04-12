import React, { useState } from 'react'
import { Title } from 'components/lib/titles'
import { Button } from 'components/lib/buttons'
import { colors } from 'config/ui'
import { BackButton } from 'components/lib/buttons'
import BorderOr from 'components/lib/borderOr'
import { withApollo } from 'react-apollo'
import logoGoogle from 'assets/images/icon-google.svg'
import logoMicrosoft from 'assets/images/icon-microsoft.svg'
import logoArvore from 'assets/images/logo-arvore-educacao-vert.svg'

import {
  ContainerStyle,
  ContainerLeftStyle,
  BackContainerLeft,
  ContainerRightStyle,
  ContainerHasEmailStyle,
  ContainerNotMe,
  ContainerButtonSiginInStyle,
  ContainerButtonsRow,
  ContainerButtonRecovery,
  InputLogin,
} from './Login.style'
import GoogleLogin from 'react-google-login'
import { CHOOSE_USER_TYPE_PATH, SITE_PATH } from 'routes'
import IconButton from 'components/lib/buttons/IconButton'

const Login = ({ client, ...props }) => {
  const [hasEmail, setHasEmail] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLoginChange = event => {
    setLogin(event.target.value)
  }

  const handleKeyUp = key => {
    if (key === 'Enter') {
      !hasEmail ? handleLoginSubmit() : handlePasswordSubmit()
    }
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleLoginSubmit = () => {
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
      setHasEmail(true)
      setUserName(login)
    }, 1000)
  }

  const handlePasswordSubmit = () => {
    setIsLoading(true)
    setIsLoading(false)
    props.history.push(SITE_PATH)
  }

  const prevStep = () => {
    setHasEmail(false)
    setLogin('')
    setPassword('')
  }

  const responseGoogle = () => {
    //call dialog modal
  }

  const handleMSBtnClick = () => {
    //call dialog modal
  }

  return (
    <ContainerStyle>
      <ContainerLeftStyle>
        <ContainerHasEmailStyle hasEmail={hasEmail}>
          {!hasEmail && <img src={logoArvore} alt="Logo Árvore Educação" />}
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
                  text={`Olá, ${userName.split(' ')[0]}`}
                  size={3}
                  style={{ margin: 0 }}
                />
                <Button
                  text="Não sou eu"
                  size="small"
                  width={126}
                  color={colors.black3}
                  bgColor={colors.white}
                  bgColorHover={'none'}
                  textColorHover={colors.black4Dark}
                  onClick={prevStep}
                />
              </ContainerNotMe>
            </React.Fragment>
          )}
        </ContainerHasEmailStyle>
        <BackContainerLeft>
          <ContainerButtonSiginInStyle>
            {hasEmail ?
              <InputLogin
                id={'password'}
                type={'password'}
                value={password}
                placeholder={'Your password'}
                style={{ marginBottom: 16 }}
                secureTextEntry={true}
                onKeyUp={handleKeyUp}
                onChange={handlePasswordChange}
                showPassword={true}
                hasEmail={hasEmail}
              /> :
              <InputLogin
                id={'login'}
                type={'text'}
                value={login}
                placeholder={'Type your login'}
                onKeyUp={handleKeyUp}
                onChange={handleLoginChange}
                showPassword={false}
                hasEmail={hasEmail}
              />
            }


            <Button
              text="Submit"
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
                  border={`1px solid ${colors.black2};`}
                  style={{ marginRight: 16, height: 48 }}
                  bgColorHover={'none'}
                  textColorHover={colors.black3Dark}
                  onClick={renderProps.onClick}
                  disabled={isLoading}
                  iconImgSrc={logoGoogle}
                />
              )}
              onSuccess={responseGoogle}
              onFailure={obj => console.log('')}
              cookiePolicy={'single_host_origin'}
            />
            <IconButton
              text="Microsoft"
              bgColor={colors.white}
              color={colors.black5}
              border={`1px solid ${colors.black2};`}
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
              text="Forgot my password"
              size="small"
              color={colors.black3}
              bgColor={colors.white}
              bgColorHover={'none'}
              textColorHover={colors.black4Dark}
              onClick={prevStep}
              style={{ margin: 0 }}
            />
          </ContainerButtonRecovery>
        </BackContainerLeft>
      </ContainerLeftStyle>
      <ContainerRightStyle />
    </ContainerStyle>
  )
}

export default withApollo(Login)
