import styled from 'styled-components'
import { colors, spacing } from 'config/ui'
import { IconButton } from 'components/lib/buttons'
import ModalFilter from 'components/lib/modal-filter'
import { TitleStyle } from 'components/lib/titles/Title.style'
import { ColumnStyle } from 'components/admin/user-management-panel/grid/FlexboxGrid.styles'

import {
  CheckboxContainer,
  CheckboxWrapper,
  ContainerStyle
} from 'components/lib/modal-filter/ModalFilter.styles'

export const ContainerHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
`

export const ContainerActionsStyle = styled.div`
  display: flex;
  align-items: center;
`

export const IconButtonStyle = styled(IconButton)`
  background-color: ${colors.white};
  border: 1px solid ${colors.black2};
  color: ${colors.black4};
  width: 114px;
  > span { margin-left: 16px; }
`

export const SubtitleStyle = styled.p`
  font-size: 13px;
  color: ${colors.black3};
  margin: 0;
  position: relative;
  top: -22px;
`

export const ModalFilterStyle = styled(ModalFilter)`
  ${TitleStyle} {
      color: ${colors.blue};
      margin-top: ${spacing.large}px;
      margin-bottom: ${spacing.medium}px !important;
    }
  ${CheckboxWrapper} {
    margin-bottom: ${spacing.medium}px;
    ${TitleStyle} {
      color: ${colors.black6};
      margin-top: 0;
      margin-bottom: ${spacing.small}px !important;
    }
    ${CheckboxContainer} { 
      > span {
      justify-content: flex-start;
      width: 28px;
      }
      > p {
        font-size: 16px;
        color: ${colors.black6};
      }
    }
  }
  ${ContainerStyle} {
    > div:nth-child(2) {
      ${ColumnStyle} {
        width: 50%;
      }
    }
  }
`
