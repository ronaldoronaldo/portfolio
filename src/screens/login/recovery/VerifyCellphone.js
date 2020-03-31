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
import {FontIcon} from 'components/lib/icons'

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
          <ContainerLeftStyle>
            <FontIcon
              iconName="cellphone"
              size={200}
              sizeMobile={150}
              color={colors.black2}
            />
          </ContainerLeftStyle>
        </Column>
        <Column lg={6}>
          <ContainerRightStyle>
            <Title
              text="Verify your cellphone"
              size={4}
              sizeMobile={4}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <CellphoneTextCodeStyle>{userPhone}</CellphoneTextCodeStyle>
            <ButtonStyle text="Already did" onClick={goBackToLogin} />
            {resendCellphoneLoading ? (
              <ContainerSpinnerStyle>
                <Spinner color={colors.primary} />
              </ContainerSpinnerStyle>
            ) : (
              <SendAgainButton
                text="Resend SMS"
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
