import styled, { css } from 'styled-components'
import { sizes, colors } from 'config/ui'

export const ContainerTextInputStyle = styled.div`
  ${({ removeWhenMobile }) => css`
    width: 100%;
    display: ${removeWhenMobile ? 'none': 'flex'};
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    @media (min-width: ${sizes.mdScreen}px) {
      display: flex;
    }
  `}
`

export const TextInputStyle = styled.input`
  ${({ isFocused, outline, bgColor }) => css`
    width: ${isFocused ? '100%' : '40px'};
    transition: width 0.4s ease-out, border-radius 0.4s ease-out;
    display: flex;
    background-color: ${bgColor || colors.white};
    padding: ${sizes.padding}px;
    border-radius: ${isFocused ? 20 : 10}px;
    outline: ${outline ? outline : 0};
    color: ${colors.black6};
    border: 1px solid ${colors.black2};
    z-index: 1;
    cursor: ${isFocused ? 'text' : 'pointer'};
    height: 40px;
    font-size: 13px;
  `}
  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.black3};
    opacity: 1; /* Firefox */
  }
`

export const SearchIconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: -1px;
  padding: ${props => (!props.isFocused ? '5px 0' : '5px 8px 0 0')};
  display: flex;
  flex-direction: row;
  z-index: 2;
`
