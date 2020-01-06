import React, { useState, useEffect } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'

import {
  WrapperStyle,
  BodyStyle,
  InputStyle,
  FinishButtons,
  RowStyle,
  LeftColumnStyle,
  RightColumnStyle,
  ResetPasswordButton,
  IconButtonStyled,
  AlertRecovery
} from 'styles/common/Common.styles'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'
import { HeaderEdit } from 'components/admin/user-management-panel/header'
import Select from 'components/lib/selects/Select'

const AdminEditScreen = props => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [userType, setUserType] = useState('')

  useEffect(() => {
    const { id } = props.match.params

    // from the backend
    if (id && id !== ':id') {
      //edit mode
      const res = {
        accessCode: 'CAD1283',
        name: 'Homura Yunosuke',
        email: 'homurayunosuke@gmail.com'
      }
      setNameInputValue(res.name) //name
      setEmailInputValue(res.email)
    } else {
      //create mode
    }

    if (notificationOpen) {
      setTimeout(() => {
        setNotificationOpen(false)
      }, 3000)
    }
  }, [notificationOpen])

  const handleNameChange = evt => {
    setNameInputValue(evt.target.value)
  }

  const handleEmailChange = evt => {
    setNameInputValue(evt.target.value)
  }

  const resetPassword = () => {
    setNotificationOpen(true)
  }

  const handleSelectValue = item => {
    setUserType(item)
  }

  return (
    <Container>
      <WrapperStyle>
        <HeaderEdit title={nameInputValue} />
        <BodyStyle>
          <AlertRecovery open={notificationOpen}>
            E-mail enviado para caio.avila@arvoreeducacao.com.br
          </AlertRecovery>
          <RowStyle style={{ marginBottom: 32 }}>
            <LeftColumnStyle sm={8.5} style={{ marginRight: 16, padding: 0 }}>
              <InputStyle
                id={'adminName'}
                style={{ marginBottom: 0 }}
                placeholder="Nome completo"
                value={nameInputValue}
                onChange={handleNameChange}
              />
            </LeftColumnStyle>
            <RightColumnStyle sm={5.3} style={{ marginLeft: 0, padding: 0 }}>
              <Select
                text={userType}
                items={['Admin', 'Professor']}
                onChange={handleSelectValue}
                maxWidth={620}
                label="Tipo de usuário"
                activeSelectButton={userType}
                labelColor={colors.black3}
                dropdownStyle={{
                  top: 43,
                  width: 231
                }}
                style={{
                  borderColor: colors.black3,
                  color: colors.black5
                }}
              />
            </RightColumnStyle>
          </RowStyle>
          <RowStyle style={{ marginBottom: 32 }}>
            <LeftColumnStyle sm={9.5} style={{ marginRight: 16, padding: 0 }}>
              <InputStyle
                id={'AdminEdit'}
                style={{ marginBottom: 0 }}
                placeholder="E-mail"
                value={emailInputValue}
                onChange={handleEmailChange}
              />
            </LeftColumnStyle>
            <RightColumnStyle sm={4.5} style={{ marginRight: 0, padding: 0 }}>
              <ResetPasswordButton
                text="Redefinir senha"
                bgColor={colors.purple3}
                bgColorHover={colors.purple3Dark}
                color={colors.white}
                textColorHover={colors.white}
                iconName="mail"
                onClick={resetPassword}
              />
            </RightColumnStyle>
          </RowStyle>
          <FinishButtons>
            <IconButtonStyled
              text="Cancelar"
              color={colors.black4}
              iconName=""
              style={{ border: 'none' }}
              onClick={() => console.log('cancel')}
            />
            <Button
              iconName="add"
              text="Salvar"
              primary
              onClick={() => console.log('save')}
              iconSize={16}
              style={{
                width: 80,
                height: 40,
                marginLeft: 8
              }}
            />
          </FinishButtons>
          <div style={{ height: 56 }} />
        </BodyStyle>
      </WrapperStyle>
    </Container>
  )
}

export default AdminEditScreen
