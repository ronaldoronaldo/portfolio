import styled, { css } from 'styled-components'
import IconButton from 'components/lib/buttons/IconButton'
import { colors } from 'config/ui'

export const WrapperStyle = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  position: relative;
  padding: 0 8px;
  margin-bottom: -8px;
`

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export const ActionButtonsWrapper = styled.div`
  ${({ showButtons }) => css`
    right: ${showButtons ? '8px' : '-450px'};
    position: absolute;
    top: 50%;
    transition: right 0.4s ease-in-out;
    transition-delay: ${showButtons ? '0.4s' : '0s'};
    display: flex;
    transform: translate(0, -50%);
  `}
`

export const ExcludeButtonsWrapper = styled.div`
  ${({ showButtons }) => css`
    right: ${!showButtons ? '-400px' : '8px'};
    position: absolute;
    top: 50%;
    display: flex;
    transform: translate(0, -50%);
    transition: right 0.4s ease-in-out;
    transition-delay: ${showButtons ? '0.4s' : '0'};
  `}
`

export const IconButtonStyle = styled(IconButton)`
  width: auto;
  min-width: 127px;
  margin-left: 8px;
  span {
    margin-right: 7px;
  }
`
export const IconButtonCancelStyle = styled(IconButton)`
  margin-left: 8px;
  border: 1px solid ${colors.black2};
  width: 124px;

  span {
    margin-right: 16px;
  }
`

export const IconButtonDeleteStyle = styled(IconButtonCancelStyle)`
  width: 167px;
  font-size: 14px;
`

export const SearchInputWrapper = styled.div`
  width: 290px;
`
export const DropdownContainerStyle = styled.div`
  position: absolute;
  width: 230px;
  right: 10px;
  margin-top: -34px;
`
