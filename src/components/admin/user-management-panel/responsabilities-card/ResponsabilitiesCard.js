import React, { useState } from 'react'

import {
  Container,
  HeaderStyle,
  BodyStyle,
  ButtonDeleteStyle,
  SelectStyle,
  ContainerCheckboxStyle,
  ContainerCheckboxWithLabel,
  LabelCheckbox,
  ContainerClassesStyle,
  ButtonAddClassStyle,
  ContainerTagsStyle,
  DropdownStyle,
  ButtonAddNewResponsabilities,
  ContainerCardResponsabilities
} from './ResponsabilitiesCard.style'
import { Overlay } from 'styles/common/Common.styles'
import { Title } from 'components/lib/titles'
import { colors } from 'config/ui'
import Checkbox from 'components/admin/user-management-panel/checkbox'
import Tag from 'components/admin/user-management-panel/tags'
import ClickOutside from 'utils/ClickOutside'

const ResponsabilitiesCard = ({ setupByClasses }) => {
  const [cards, setCards] = useState([])

  const schoolYearsArr = [
    'Ensino infantil',
    '1º ano',
    '2º ano',
    '3º ano',
    '4º ano',
    '5º ano',
    '6º ano',
    '7º ano',
    '8º ano',
    '9º ano',
    'Ensino médio'
  ]
  const classesArr = [
    'Turma 501',
    'Turma 601',
    'Turma 701',
    'Turma 801',
    'Turma 901',
    'Turma 1101',
    'Turma 1102',
    'Turma 1103',
    'Turma 1104',
    'Turma 1105'
  ]
  const itensUnitsArr = ['Unidade Norte 01', 'Unidade Norte 02']
  const itensSetupByArr = ['Ano escolar', 'Turma']

  if (setupByClasses) {
    let newCards = [...cards]
    newCards.forEach(item => (item.setupBy = 'Turma'))
  }

  const closeDropdown = index => {
    let newCards = [...cards]
    newCards[index].dropdownOpened = false
    setCards(newCards)
  }

  const openDropdown = index => {
    let newCards = [...cards]
    newCards[index].dropdownOpened = true
    setCards(newCards)
  }

  const handleAddClasses = (selectedItems, index) => {
    let newCards = [...cards]
    newCards[index].classes = [...newCards[index].classes, ...selectedItems]
    newCards[index].dropdownOpened = false
    setCards(newCards)
  }

  const handleSelectSetupBy = (value, index) => {
    const newCards = [...cards]
    newCards[index].setupBy = value
    setCards(newCards)
  }

  const handleSelectUnit = (value, index) => {
    const newCards = [...cards]
    newCards[index].unit = value
    setCards(newCards)
  }

  const handleDeleteCard = index => {
    const newCards = cards.filter((card, cardIndex) => {
      return cardIndex !== index
    })
    setCards(newCards)
  }

  const handleAddNewResponsabilities = () => {
    setCards([
      ...cards,
      {
        unit: 'Unidade Norte 01',
        schoolYears: [],
        classes: ['Turma 501'],
        setupBy: 'Ano escolar',
        availableClasses: classesArr,
        dropdownOpened: false
      }
    ])
  }

  const handleCheckboxSchoolYears = (card, index, item) => {
    const newCards = [...cards]
    if (card.schoolYears.indexOf(item) !== -1) {
      newCards[index].schoolYears = card.schoolYears.filter(
        cardItem => cardItem !== item
      )
    } else {
      newCards[index].schoolYears.push(item)
    }
    setCards(newCards)
  }

  const removeTag = (card, item, index) => {
    const newArrActiveClasses = card.classes.filter(
      itemActiveClasses => itemActiveClasses !== item
    )
    let newCards = [...cards]
    console.log(cards)
    newCards[index].classes = newArrActiveClasses
    console.log(newCards)
    setCards(cards)
  }

  const renderCheckboxSchoolYears = (card, index) => {
    return schoolYearsArr.map(item => (
      <ContainerCheckboxWithLabel
        key={item}
        onClick={() => handleCheckboxSchoolYears(card, index, item)}
      >
        <Checkbox
          checked={card.schoolYears.indexOf(item) !== -1}
          onChange={() => console.log('required prop')}
        />
        <LabelCheckbox>{item}</LabelCheckbox>
      </ContainerCheckboxWithLabel>
    ))
  }

  const renderActiveClasses = card => {
    return card.classes.map((item, index) => {
      return (
        <Tag
          key={index}
          text={item}
          border
          style={{ height: 24, marginLeft: 0, marginRight: 8 }}
          onClick={() => removeTag(card, item, index)}
        />
      )
    })
  }

  const renderCardResponsabilities = () => {
    return cards.map((card, index) => {
      let newNumber = parseInt(index + 1)
      if (newNumber < 10) {
        newNumber = '0' + newNumber
      }
      return (
        <ContainerCardResponsabilities key={index}>
          <HeaderStyle>
            <Title
              text={`Responsabilidade ${newNumber}`}
              size={4}
              sizeMobile={4}
              style={{
                fontSize: 16,
                color: colors.black4,
                marginTop: 0,
                marginBottom: 0
              }}
            />
            <ButtonDeleteStyle
              iconName="trash"
              onClick={() => handleDeleteCard(index)}
              iconSize={16}
              bgColorHover={colors.red3Dark}
              textColorHover={colors.white}
            />
          </HeaderStyle>

          <BodyStyle>
            <SelectStyle
              label="Unidade"
              text={card.unit}
              items={itensUnitsArr}
              activeSelectButton
              style={{ marginTop: 36 }}
              onChange={value => handleSelectUnit(value, index)}
            />
            {!setupByClasses && (
              <SelectStyle
                label="Configurar por"
                text={card.setupBy}
                items={itensSetupByArr}
                activeSelectButton
                style={{ marginTop: 36 }}
                onChange={value => handleSelectSetupBy(value, index)}
              />
            )}
            {card.setupBy === 'Ano escolar' && (
              <ContainerCheckboxStyle>
                {renderCheckboxSchoolYears(card, index)}
              </ContainerCheckboxStyle>
            )}
            {card.setupBy === 'Turma' && (
              <ContainerClassesStyle>
                <Overlay showOverlay={card.dropdownOpened}>
                  {card.dropdownOpened && (
                    <ClickOutside
                      onClickOutside={() => closeDropdown(index)}
                      style={{ maxHeight: 504, overflow: 'hidden' }}
                    >
                      <DropdownStyle
                        items={card.availableClasses}
                        active
                        mobileStyle
                        checkbox
                        headerTitle="Selecione as turmas"
                        style={{ position: 'relative', marginTop: 32 }}
                        searchInputLabel="Buscar por turmas"
                        closeDropdown={() => closeDropdown(index)}
                        handleCancel={() => closeDropdown(index)}
                        handleAdd={selectedItems =>
                          handleAddClasses(selectedItems, index)
                        }
                        checked={card.classes}
                        actionsButtons
                        onChange={() => console.log('dropdown on change')}
                      />
                    </ClickOutside>
                  )}
                </Overlay>
                <ContainerTagsStyle>
                  {renderActiveClasses(card)}
                </ContainerTagsStyle>
                <ButtonAddClassStyle
                  text="Adicionar Turma"
                  size="small"
                  bgColorHover={colors.purple3Light}
                  onClick={() => openDropdown(index)}
                />
              </ContainerClassesStyle>
            )}
          </BodyStyle>
        </ContainerCardResponsabilities>
      )
    })
  }

  return (
    <Container>
      {renderCardResponsabilities()}
      <ButtonAddNewResponsabilities
        text="Adicionar novas responsabilidades"
        size="medium"
        bgColorHover={colors.orange3Light}
        onClick={handleAddNewResponsabilities}
      />
    </Container>
  )
}

export default ResponsabilitiesCard
