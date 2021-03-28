import styled from 'styled-components'
import { ButtonStyle } from './Button.style'

export const StyledIconButton = styled(ButtonStyle)`
  > span {
    margin-right: ${props =>
      props.margin ? props.margin : props.text ? 10 : 0}px;
    color: ${props => props.color};
    transition: all 0.3s;
  }

  > img {
    margin-right: 7px;
  }

  &:hover {
    > span {
      color: ${props => props.textColorHover};
    }
  }
`
