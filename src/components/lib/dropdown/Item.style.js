import styled from 'styled-components'
import { sizes, colors } from 'config/ui'

export const Container = styled.a`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: ${sizes.padding}px;
  border-bottom: 1px solid ${colors.black2};
  transition: background-color 0.2s ease-in;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  background: ${props => (props.disabled ? colors.black1 : colors.white)};
  color: ${props => (props.disabled ? colors.black3 : colors.black5)};

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 5px 5px;
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:hover {
    background: ${colors.black1};
  }
`

export const ItemImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  opacity: ${props => props.disabled && '90%'};
`

export const ItemText = styled.p`
  font-size: ${sizes.text};
`
