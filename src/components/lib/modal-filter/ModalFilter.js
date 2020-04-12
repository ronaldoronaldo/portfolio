import React, { useState, useEffect } from 'react'
import {
  ModalFilterBackground,
  FilterContainer,
  ContainerStyle,
  SelectStyle,
  CheckboxContainer,
  LabelCheckbox,
  CheckboxWrapper
} from './ModalFilter.styles'
import { Row, Column } from 'components/admin/user-management-panel/grid'
import { Button } from 'components/lib/buttons'
import { spacing, colors } from 'config/ui'
import Title from 'components/lib/titles/Title'
import PropTypes from 'prop-types'
import Checkbox from "../../admin/user-management-panel/checkbox";
import ClickOutside from "../../../utils/ClickOutside"

const ModalFilter = ({
  closeFilter,
  handleFilter,
  iconNext,
  handleFilterSubmit,
  selects,
  checkboxes,
  title,
  ...props
}) => {
  const [fade, setFade] = useState(false)
  const [slide, setSlide] = useState(false)
  const [enableButton, setEnableButton] = useState(false)
  const [values, setValues] = useState([''])
  const [selectsArray, setSelectsArray] = useState(selects)
  const [checkboxesArray, setCheckboxesArray] = useState(checkboxes)

  useEffect(() => {
    setTimeout(() => setFade(true), 150)
    setTimeout(() => setSlide(true), 500)
    if (checkboxes){
      const newCheckboxes = checkboxes.map(checkboxeCategory => {
        return {
          title: checkboxeCategory.title,
          options: checkboxeCategory.options.map(option => {
            return {
              text: option,
              checked: false
            }
          })
        }
      })
      setCheckboxesArray(newCheckboxes)
    }
  }, [])

  const fadeAndCloseFilter = () => {
    setSlide(false)
    setTimeout(() => setFade(false), 300)
    setTimeout(closeFilter, 800)
  }

  const handleFilterSubmitAction = () => {
    if (!enableButton) return
    const filteredValues = values.filter(value => value.length > 0)
    console.log(filteredValues)
    handleFilter(filteredValues)
    fadeAndCloseFilter()
    handleFilterSubmit(filteredValues)
  }

  const onFilterChange = (value, index) => {
    selectOnChange(index, value)
    setEnableButton(true)
  }

  const selectOnChange = (index, value) => {
    let newValues = [...values]
    let newSelectsArray = [...selectsArray]
    newSelectsArray[index].activeSelectButton = true
    newValues[index] = value
    setSelectsArray(newSelectsArray)
    setValues(newValues)
  }

  const checkIfButtonShouldBeEnabled = newArray => {
    let enable = false
    newArray.forEach(category => {
      category.options.forEach(option => {
        if (option.checked) enable = true
      })
    })
    return enable
  }

  const onCheck = (option, index, opIndex) => {
    let newArray = [...checkboxesArray]
    newArray[index].options[opIndex].checked = !option.checked
    setCheckboxesArray(newArray)
    setEnableButton(checkIfButtonShouldBeEnabled(newArray))
  }

  return (
    <ModalFilterBackground fade={fade} {...props}>
      <ClickOutside onClickOutside={fadeAndCloseFilter}>
        <FilterContainer slide={slide}>
          <ContainerStyle>
            <div>
              <Row>
                <Column sm={6}>
                  <Title
                    text={title || "Filtrar"}
                    sizeMobile={4}
                    size={4}
                    style={{ marginBottom: 48 }}
                    textAlign={'left'}
                  />
                </Column>
              </Row>
              <Row>
                <Column sm={12}>
                  {selects && selectsArray.map((select, index) => {
                    return (
                      <SelectStyle
                        mobileStyle
                        key={index}
                        placeholder={select.placeholder}
                        items={select.items}
                        text={values[index]}
                        activeSelectButton={
                          selectsArray[index].activeSelectButton
                        }
                        label={selects[index].placeholder}
                        onChange={value => onFilterChange(value, index)}
                        headerTitle={select.headerTitle}
                        searchInputLabel={select.searchInputPlaceholder}
                        style={{
                          marginBottom: spacing.medium
                        }}
                        iconNext={iconNext}
                      />
                    )
                  })}
                  {checkboxes && checkboxesArray.map((checkboxCategory, index) => {
                    return (
                      <CheckboxWrapper>
                        <Title
                          text={checkboxCategory.title}
                          sizeMobile={5}
                          size={5}
                          style={{ marginBottom: 48 }}
                          textAlign={'left'}
                        />
                        {checkboxCategory.options.map((option, opIndex)=> {
                          return (
                            <CheckboxContainer
                              onClick={() => onCheck(option, index, opIndex)}
                            >
                              <Checkbox
                                checked={option.checked}
                                onChange={() => console.log('checked')}
                              />
                              <LabelCheckbox>{option.text}</LabelCheckbox>
                            </CheckboxContainer>
                          )
                        })
                        }
                      </CheckboxWrapper>
                    )
                  })}
                </Column>
              </Row>
            </div>
            <div>
              <Row>
                <Column sm={4}>
                  <Button
                    text="Cancelar"
                    bgColor={colors.white}
                    bgColorHover={colors.white}
                    textColorHover={colors.black4}
                    color={colors.black5}
                    onClick={fadeAndCloseFilter}
                  />
                </Column>
                <Column sm={8}>
                  <Button
                    text="Filtrar"
                    isEnabled={enableButton}
                    onClick={handleFilterSubmitAction}
                    // loading={filterLoading}
                  />
                </Column>
              </Row>
            </div>
          </ContainerStyle>
        </FilterContainer>
      </ClickOutside>
    </ModalFilterBackground>
  )
}

export default ModalFilter

ModalFilter.propTypes = {
  closeFilter: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleFilterSubmit: PropTypes.func,
  selects: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.string),
      placeholder: PropTypes.string,
      searchInputPlaceholder: PropTypes.string,
      headerTitle: PropTypes.string
    })
  )
}
