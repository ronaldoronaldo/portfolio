import React, { useState, useEffect } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import { ResponsabilitiesCard } from 'components/admin/user-management-panel/responsabilities-card'

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
  AlertRecovery,
  LabelAccordionStyle,
  ScholarshipSwitchContainer,
  AccessCodeLabel,
  ContainerAccordionMenu
} from 'styles/common/Common.styles'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'
import { HeaderEdit } from 'components/admin/user-management-panel/header'
import { AccordionMenu } from 'components/admin/user-management-panel/accordion-menu'
import Select from 'components/lib/selects/Select'
import ToggleSwitch from 'components/lib/toggleSwitch'

const TeachersEditScreen = props => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [userType, setUserType] = useState('')
  const [student, setStudent] = useState({ scholarship: false })
  const [scholarshipDisabled] = useState(false)

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

  const toggleScholarshipSwitch = () => {
    if (scholarshipDisabled) return
    setStudent({ ...student, scholarship: !student.scholarship })
  }

  const { scholarship } = student

  return (
    <Container>
      <WrapperStyle>
        <HeaderEdit title={nameInputValue} />
        <BodyStyle>
          <AlertRecovery open={notificationOpen}>
            E-mail enviado para caio.avila@arvoreeducacao.com.br
          </AlertRecovery>
          <InputStyle
            id={'directorsName'}
            placeholder="Nome completo"
            value={nameInputValue}
            onChange={handleNameChange}
            style={{ marginBottom: 50 }}
          />
          <AccessCodeLabel>
            <h3>Código de acesso</h3>
            <h2>CDA8236</h2>
          </AccessCodeLabel>
          <AccordionMenu text="Outras alternativas de acesso">
            <ContainerAccordionMenu>
              <LabelAccordionStyle>E-mail e senha</LabelAccordionStyle>
              <RowStyle style={{ marginBottom: 50 }}>
                <LeftColumnStyle sm={7.5} style={{ padding: 0, margin: 16 }}>
                  <InputStyle
                    id={'directorsEmail'}
                    style={{ marginBottom: 0 }}
                    placeholder="E-mail"
                    value={emailInputValue}
                    onChange={handleEmailChange}
                  />
                </LeftColumnStyle>
                <RightColumnStyle sm={4.5} style={{ padding: 0, margin: 0 }}>
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

              <LabelAccordionStyle>
                Identificador e senha pública
            </LabelAccordionStyle>
              <RowStyle style={{ marginBottom: 50 }}>
                <LeftColumnStyle sm={7.5} style={{ padding: 0, margin: 16 }}>
                  <InputStyle
                    id={'identifier'}
                    style={{ marginBottom: 0 }}
                    placeholder="Identificador"
                    value={'caio.avila'}
                  />
                </LeftColumnStyle>
                <RightColumnStyle sm={4.5} style={{ padding: 0, margin: 0 }}>
                  <InputStyle
                    id={'publicKey'}
                    style={{ marginBottom: 0 }}
                    placeholder="Senha pública"
                    value={'arvore12345'}
                  />
                </RightColumnStyle>
              </RowStyle>
            </ContainerAccordionMenu>
          </AccordionMenu>
          <AccordionMenu text="Responsabilidades">
            <ContainerAccordionMenu>
              <LeftColumnStyle style={{ padding: 0, margin: 0 }}>
                <RowStyle
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: 55,
                    marginTop: 26
                  }}
                >
                  <ResponsabilitiesCard setupByClasses />
                </RowStyle>
              </LeftColumnStyle>
            </ContainerAccordionMenu>
          </AccordionMenu>
          <AccordionMenu text="Informações secundárias" haveBorderBottom>
            <ContainerAccordionMenu>
              <LeftColumnStyle >
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
                    width: 556
                  }}
                  style={{
                    borderColor: colors.black3,
                    color: colors.black5
                  }}
                />
                <AlertRecovery open={true} color="#595A5C" bgColor="#FFF5F1">
                  Esses dados podem ser importantes para recuperação de senha
              </AlertRecovery>
                <RowStyle>
                  <LeftColumnStyle sm={8}>
                    <InputStyle
                      id={'secondaryEmail'}
                      style={{ marginBottom: 0 }}
                      placeholder="E-mail secundário"
                      value={''}
                    />
                  </LeftColumnStyle>
                  <RightColumnStyle sm={4}>
                    <InputStyle
                      id={'phoneNumber'}
                      style={{ marginBottom: 0 }}
                      placeholder="Número celular"
                      value={''}
                    />
                  </RightColumnStyle>
                </RowStyle>

                <LabelAccordionStyle>Esse aluno é bolsista?</LabelAccordionStyle>
                <ScholarshipSwitchContainer>
                  <div>
                    <span>Esse aluno é bolsista!</span>
                    <ToggleSwitch
                      active={scholarship}
                      onChange={toggleScholarshipSwitch}
                      disabled={scholarshipDisabled}
                    />
                  </div>
                </ScholarshipSwitchContainer>
              </LeftColumnStyle>
            </ContainerAccordionMenu>
          </AccordionMenu>

          <FinishButtons>
            <IconButtonStyled
              text="Cancel"
              color={colors.black4}
              iconName=""
              style={{ border: 'none' }}
              onClick={() => console.log('cancel')}
            />
            <Button
              iconName="add"
              text="Save"
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

export default TeachersEditScreen
