import React, { useState, useEffect } from 'react'
import { Title } from 'components/lib/titles'
import {
  WrapperStyle,
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
  ContainerAccordionMenu,
  InfoRow,
  SectionContainer
} from 'styles/common/Common.styles'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'
import ShowTags from 'components/admin/user-management-panel/show-tags'
import PagedList from 'components/admin/user-management-panel/paged-list/PagedList'
import { AccordionMenu } from 'components/admin/user-management-panel/accordion-menu'
import Select from 'components/lib/selects/Select'
import ToggleSwitch from 'components/lib/toggleSwitch'
import { ResponsabilitiesCard } from 'components/admin/user-management-panel/responsabilities-card'

const mockedLinked = ['Class 401']
const mockedUnlinked = [
  'Class 501',
  'Class 601',
  'Class 701',
  'Class 801',
  'Class 901',
  'Class 1001',
  'Class 1002',
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
        E-mail enviado para caio@arvore.com
      </AlertRecovery>
      <InputStyle
        id={'directorsName'}
        placeholder="Full name"
        value={nameInputValue}
        onChange={handleNameChange}
        style={{ marginBottom: 50 }}
      />
      <AccessCodeLabel>
        <h3>Access code</h3>
        <h2>CDA8236</h2>
      </AccessCodeLabel>
      <AccordionMenu text="Access information">
        <ContainerAccordionMenu>
          <LabelAccordionStyle>E-mail e password</LabelAccordionStyle>
          <InfoRow style={{ marginBottom: 50 }}>
            <LeftColumnStyle md={7.5}>
              <InputStyle
                id={'directorsEmail'}
                style={{ marginBottom: 0 }}
                placeholder="E-mail"
                value={emailInputValue}
                onChange={handleEmailChange}
              />
            </LeftColumnStyle>
            <RightColumnStyle md={4.5} style={{ padding: 0, margin: 0 }}>
              <ResetPasswordButton
                text="Reset password"
                bgColor={colors.purple3}
                bgColorHover={colors.purple3Dark}
                color={colors.white}
                textColorHover={colors.white}
                iconName="mail"
                onClick={resetPassword}
              />
            </RightColumnStyle>
          </InfoRow>

          <LabelAccordionStyle>
            Identifier and public password
          </LabelAccordionStyle>
          <InfoRow style={{ marginBottom: 50 }}>
            <LeftColumnStyle md={7.5}>
              <InputStyle
                id={'identifier'}
                style={{ marginBottom: 0 }}
                placeholder="Identifier"
                value={'caio.avila'}
                readOnly
              />
            </LeftColumnStyle>
            <RightColumnStyle md={4.5} style={{ padding: 0, margin: 0 }}>
              <InputStyle
                id={'publicKey'}
                style={{ marginBottom: 0 }}
                placeholder="Public password"
                value={'arvore12345'}
                readOnly
              />
            </RightColumnStyle>
          </InfoRow>
        </ContainerAccordionMenu>
      </AccordionMenu>
      <AccordionMenu text="Student classes">
        <ContainerAccordionMenu>
          <SectionContainer style={{ margin: 0 }}>
            <Select
              text={units}
              noMarginLeft
              items={[
                'North Unity 01',
                'North Unity 02',
                'South Unity 01',
                'East Unity 01',
              ]}
              onChange={handleSelectUnits}
              label="Unity"
              activeSelectButton={units}
              labelColor={colors.black3}
              dropdownStyle={{
                width: '100%',
              }}
              style={{
                borderColor: colors.black3,
                color: colors.black5,
                marginBottom: 32,
                marginLeft: 16,
                width: '100%'
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
                label="Student's classes"
                removeTag={removeLinkedItem}
                style={{ minHeight: 108 }}
              />
              <PagedListHeader style={{ width: '100%' }}>
                <ColumnStyle sm={6}>
                  <Title
                    text="Unity classes"
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
                    placeholder="Search"
                  />
                </ColumnStyle>
              </PagedListHeader>
              <PagedList
                items={unlinkedItems}
                onItemClicked={addLinkedItem}
                emptyLabel="unities"
              />
            </RowStyle>
          </SectionContainer>
        </ContainerAccordionMenu>
      </AccordionMenu>

      <AccordionMenu text="Teacher lessons">
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
          <SectionContainer>
            <Select
              text={userType}
              items={['Principal', 'Professor', 'Student']}
              onChange={handleSelectValue}
              label="User role"
              activeSelectButton={userType}
              labelColor={colors.black3}
              dropdownStyle={{
                width: '100%'
              }}
              style={{
                borderColor: colors.black3,
                color: colors.black5
              }}
            />
            <AlertRecovery open={true} color="#595A5C" bgColor="#FFF5F1">
              This section is important for password recovery
            </AlertRecovery>
            <InfoRow>
              <LeftColumnStyle md={8}>
                <InputStyle
                  id={'secondaryEmail'}
                  style={{ marginBottom: 0 }}
                  placeholder="Secondary e-mail "
                  value={''}
                  readOnly
                />
              </LeftColumnStyle>
              <RightColumnStyle md={4}>
                <InputStyle
                  id={'phoneNumber'}
                  style={{ marginBottom: 0 }}
                  placeholder="Cellphone number"
                  value={''}
                  readOnly
                />
              </RightColumnStyle>
            </InfoRow>
            <LabelAccordionStyle>This student have a scholarship?</LabelAccordionStyle>
            <ScholarshipSwitchContainer>
              <div>
                <span>Yes it does!</span>
                <ToggleSwitch
                  active={scholarship}
                  onChange={toggleScholarshipSwitch}
                  disabled={scholarshipDisabled}
                />
              </div>
            </ScholarshipSwitchContainer>
          </SectionContainer>
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
    </WrapperStyle>
  )
}

export default StudentsEditScreen
