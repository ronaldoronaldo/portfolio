import React, { useEffect, useState } from 'react'
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
import { LOGIN_PATH } from 'routes'

const VerifyCellphone = props => {
  const [resendCellphoneLoading, setResendCellphoneLoading] = useState(false)

  const userPhone = '21 96409-5416'

  useEffect(() => {
    document.addEventListener('keyup', handleSubmit)
    return () => {
      document.removeEventListener('keyup', handleSubmit)
    }
  }, [])

  const resendCellphone = () => {
    setResendCellphoneLoading(true)
    //mock resendCellphoneQuery
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(3000)
      .then(res => {
        setResendCellphoneLoading(false)
        console.log('sms was resent')
      })
      .catch(() => {})
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
      <Row flexstart>
        <Column lg={6}>
          <ContainerLeftStyle />
        </Column>
        <Column lg={6}>
          <ContainerRightStyle>
            <Title
              text="Verifique seu celular"
              size={4}
              sizeMobile={4}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <CellphoneTextCodeStyle>{userPhone}</CellphoneTextCodeStyle>
            <ButtonStyle text="Já verifiquei" onClick={goBackToLogin} />
            {resendCellphoneLoading ? (
              <ContainerSpinnerStyle>
                <Spinner color={colors.primary} />
              </ContainerSpinnerStyle>
            ) : (
              <SendAgainButton
                text="Enviar novamente"
                size="small"
                bgColorHover={'none'}
                textColorHover={colors.black4Dark}
                onClick={resendCellphone}
              />
            )}
          </ContainerRightStyle>
        </Column>
      </Row>
    </Container>
  )
}

export default VerifyCellphone
