import React, { useState, useEffect } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import { Title } from 'components/lib/titles'

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
  PagedListHeader,
  ColumnStyle,
  AlertRecovery,
  LabelAccordionStyle,
  ScholarshipSwitchContainer,
  AccessCodeLabel,
  InputSearchStyle,
  ContainerAccordionMenu
} from 'styles/common/Common.styles'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'
import ShowTags from 'components/admin/user-management-panel/show-tags'
import PagedList from 'components/admin/user-management-panel/paged-list/PagedList'
import { AccordionMenu } from 'components/admin/user-management-panel/accordion-menu'
import Select from 'components/lib/selects/Select'
import ToggleSwitch from 'components/lib/toggleSwitch'
import {ResponsabilitiesCard} from "../../../../components/admin/user-management-panel/responsabilities-card"

const mockedLinked = ['Turma 401']
const mockedUnlinked = [
  'Turma 501',
  'Turma 601',
  'Turma 701',
  'Turma 801',
  'Turma 901',
  'Turma 1001',
  'Turma 1002',
  'Inglês IV'
]

const StudentsEditScreen = props => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue] = useState('')
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [linkedItems, setLinkedItems] = useState([])
  const [unlinkedItems, setUnlinkedItems] = useState([])
  const [userType, setUserType] = useState('')
  const [units, setUnits] = useState('')
  const [scholarshipDisabled] = useState(false)
  const [student, setStudent] = useState({ scholarship: false })

  useEffect(() => {
    const { id } = 2

    // from the backend
    if (id && id !== ':id') {
      //edit mode
      setLinkedItems(mockedLinked) // linked items
      setUnlinkedItems(mockedUnlinked) //unlinked items
    } else {
      //create mode
      //create mode
      setUnlinkedItems(mockedUnlinked) //unlinked items
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

  const addLinkedItem = index => {
    const newLinkedItems = [...linkedItems]
    const newUnlinkedItems = unlinkedItems.filter((item, itemIndex) => {
      if (index !== itemIndex) {
        return item
      } else {
        newLinkedItems.push(item)
      }
    })
    setLinkedItems(newLinkedItems)
    setUnlinkedItems(newUnlinkedItems)
  }

  const removeLinkedItem = index => {
    const newUnlinkedItems = [...unlinkedItems]
    const newLinkedItems = linkedItems.filter((item, itemIndex) => {
      if (index !== itemIndex) {
        return item
      } else {
        newUnlinkedItems.push(item)
      }
    })
    setLinkedItems(newLinkedItems)
    setUnlinkedItems(newUnlinkedItems)
  }

  const handleSearchInput = () => {
    console.log('search')
  }

  const handleSelectValue = item => {
    setUserType(item)
  }

  const handleSelectUnits = item => {
    setUnits(item)
  }

  const toggleScholarshipSwitch = () => {
    if (scholarshipDisabled) return
    setStudent({ ...student, scholarship: !student.scholarship })
  }

  const { scholarship } = student

  return (
    <WrapperStyle>
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
      <AccordionMenu text="Access information">
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
      <AccordionMenu text="Student classes to enroll">
        <ContainerAccordionMenu>
          <LeftColumnStyle style={{ padding: 0, margin: 0 }}>
            <Select
              text={units}
              noMarginLeft
              items={['Unidade Norte 02']}
              onChange={handleSelectUnits}
              maxWidth={620}
              label="Unidade"
              activeSelectButton={units}
              labelColor={colors.black3}
              dropdownStyle={{
                top: 43,
                width: 556,
                marginLeft: 16
              }}
              style={{
                borderColor: colors.black3,
                color: colors.black5,
                marginBottom: 32,
                marginLeft: 16,
                width: 556
              }}
            />
            <RowStyle
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginBottom: -20
              }}
            >
              <ShowTags
                tags={linkedItems}
                label="Turmas desse aluno"
                removeTag={removeLinkedItem}
                style={{ minHeight: 108 }}
              />
              <PagedListHeader style={{ width: '100%' }}>
                <ColumnStyle sm={6}>
                  <Title
                    text="Turmas da unidade"
                    size={5}
                    sizeMobile={5}
                    textAlign="left"
                    style={{ color: colors.black5, margin: 0 }}
                  />
                </ColumnStyle>
                <ColumnStyle sm={6}>
                  <InputSearchStyle
                    value={''}
                    onChange={handleSearchInput}
                    placeholder="Buscar turmas"
                  />
                </ColumnStyle>
              </PagedListHeader>
              <PagedList
                items={unlinkedItems}
                onItemClicked={addLinkedItem}
                emptyLabel="unidades"
              />
            </RowStyle>
          </LeftColumnStyle>
        </ContainerAccordionMenu>
      </AccordionMenu>

      <AccordionMenu text="Teacher responsibilities">
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

      <AccordionMenu text="Secondary information" haveBorderBottom>
        <ContainerAccordionMenu>
          <LeftColumnStyle>
            <Select
              text={userType}
              items={['Admin', 'Professor']}
              onChange={handleSelectValue}
              label="Tipo de usuário"
              activeSelectButton={userType}
              labelColor={colors.black3}
              dropdownStyle={{
                top: 43,
                width: '100%'
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
    </WrapperStyle>
  )
}

export default StudentsEditScreen
