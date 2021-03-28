import React, { useState, useEffect } from 'react'
import { colors } from 'config/ui'
import {
  CellphoneTextCodeStyle,
  SendAgainButton,
  ContainerRightStyle,
  ContainerLeftStyle,
  ButtonStyle,
  ContainerSpinnerStyle
} from './VerifyCellphone.style'
import { Container, Column, Row } from 'components/lib/grid'
import Title from 'components/lib/titles/Title'
import { Spinner } from 'components/lib/loaders'
import { Alert } from 'components/lib/alerts'
import { FontIcon } from 'components/lib/icons'

import { LOGIN_PATH } from 'routes'

import { withApollo } from 'react-apollo'

const VerifyEmail = ({ client, ...props }) => {
  const [resendEmailLoading, setResendEmailLoading] = useState(false)
  const [userMail, setUserMail] = useState('')
  const [alertData, setAlertData] = useState(null)

  if (!props.location.state) props.history.push(LOGIN_PATH)

  useEffect(() => {
    if (props.location.state) {
      const { email } = props.location.state
      setUserMail(email)
    }
    document.addEventListener('keyup', handleSubmit)
    return () => {
      document.removeEventListener('keyup', handleSubmit)
    }
  }, [])

  const resendEmail = () => {
    setResendEmailLoading(true)

    setTimeout(() => {
      setAlertData({
        title: 'Success',
        message: 'E-mail sent to ' + userMail,
        textButton: 'Got it!'
      })
      setResendEmailLoading(false)
    }, 1000)
  }

  const goBackToLogin = () => {
    props.history.push(LOGIN_PATH)
  }

  const handleSubmit = event => {
    if (event.key === 'Enter') {
      goBackToLogin()
    }
  }

  return (
    <Container>
      {alertData && (
        <Alert
          title={alertData.title}
          message={alertData.message}
          textButton={alertData.textButton}
          onClick={() => setAlertData(null)}
        />
      )}
      <Row flexstart>
        <Column lg={6}>
          <ContainerLeftStyle>
            <FontIcon
              iconName="mail-cascade"
              size={200}
              sizeMobile={150}
              color={colors.black2}
            />
          </ContainerLeftStyle>
        </Column>
        <Column lg={6}>
          <ContainerRightStyle>
            <Title
              text="Verify your e-mail"
              size={4}
              sizeMobile={4}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <CellphoneTextCodeStyle>{userMail}</CellphoneTextCodeStyle>
            <ButtonStyle text="Already did" onClick={() => goBackToLogin()} />
            {resendEmailLoading ? (
              <ContainerSpinnerStyle>
                <Spinner color={colors.primary} />
              </ContainerSpinnerStyle>
            ) : (
              <SendAgainButton
                text="Resend e-mail"
                size="small"
                bgColorHover={'none'}
                textColorHover={colors.black4Dark}
                onClick={resendEmail}
              />
            )}
          </ContainerRightStyle>
        </Column>
      </Row>
    </Container>
  )
}

export default withApollo(VerifyEmail)
