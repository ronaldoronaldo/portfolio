import styled, { keyframes } from 'styled-components'
import { colors, sizes, spacing } from 'config/ui'
import { IconButton, Button } from 'components/lib/buttons'
import { Dropdown } from 'components/lib/dropdown'
import { Select } from 'components/lib/selects'

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(-40px);
  },
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
`

export const Container = styled.div`
  width: 100%;
`

export const ContainerCardResponsabilities = styled.div`
  -webkit-animation: ${fadeInDown} 0.5s; /* Safari 4.0 - 8.0 */
  animation: ${fadeInDown} 0.5s;
`

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const ButtonDeleteStyle = styled(IconButton)`
  width: 32px;
  height: 32px;
  background: ${colors.red3};
  > span {
    color: ${colors.white};
  }
`

export const BodyStyle = styled.div`
  width: 100%;
  min-height: 282px;
  border-radius: 5px;
  border: solid 1px ${colors.black2};
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.06);
  padding: 0 32px 40px 32px;
  margin-bottom: ${spacing.small}px;
`

export const SelectStyle = styled(Select)`
  max-width: 503px;
`

export const ContainerCheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 28px;
  cursor: pointer;
`

export const ContainerCheckboxWithLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;

  > span {
    width: auto;
    margin-right: 8px;
    margin-top: -3px;

    > label {
      width: 18px;
      height: 18px;
    }
  }
`

export const LabelCheckbox = styled.p`
  margin: 0 16px 0 0;
  font-size: ${sizes.label + 1}px;
  color: #293841;
`

export const ContainerClassesStyle = styled.div`
  margin-top: 28px;
`

export const ButtonAddClassStyle = styled(Button)`
  background: ${colors.purple3};
  color: ${colors.white};
  border-radius: 7px;
`

export const ContainerTagsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 6px;
`

export const DropdownStyle = styled(Dropdown)`
  button {
    > span {
      width: auto;
      margin-right: 8px;
    }
  }

  > div {
    margin-bottom: 16px;

    &:first-child {
      > div {
        &:first-child {
          margin-top: 8px;
          margin-bottom: 8px;
        }
      }

      input {
        border-radius: 5px;
      }

      label {
        margin-top: 6px;
      }
    }
  }
`

export const ButtonAddNewResponsabilities = styled(Button)`
  background: ${colors.orange3};
  color: ${colors.white};
  border-radius: 10px;
`
