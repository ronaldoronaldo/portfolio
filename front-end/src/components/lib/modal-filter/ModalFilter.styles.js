import styled, { css } from 'styled-components'
import { colors, sizes, spacing } from 'config/ui'

import { Select } from 'components/lib/selects'

const modalBackground = `hsla(240, 1%, 18%, 0.9)`

export const ModalFilterBackground = styled.div`
  ${({ fade }) => css`
    opacity: ${fade ? '1' : '0'};
    z-index: 10;
  `}
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${modalBackground};
  transition: opacity 0.5s ease-out;
`

export const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 32px 44px 32px;
`

export const FilterContainer = styled.div`
  ${({ slide }) => css`
    right: ${slide ? '0' : '-350'}px;
  `}
  position: absolute;
  display: flex;
  width: 350px;
  height: 100%;
  background-color: ${colors.white};
  transition: right 0.4s ease-out;
`

export const SelectStyle = styled(Select)`
  > div {
    margin-bottom: 8px;
    > div:first-child {
      margin-bottom: 8px;
    }
  }

  label {
    top: -6px;
    margin-left: 8px;
    > span {
      font-size: 18px;
      margin-top: 2px;
    }
  }

  input {
    height: 40px;
    border-radius: 5px;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${spacing.spacingXSmall}px;
`

export const LabelCheckbox = styled.p`
  margin: 0 16px 0 0;
  font-size: ${sizes.label + 1}px;
  color: #293841;
`
