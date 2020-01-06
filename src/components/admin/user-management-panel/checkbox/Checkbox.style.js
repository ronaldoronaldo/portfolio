import styled from 'styled-components'
import { colors } from 'config/ui'

export const CheckboxContainerStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 5px;
    border: 2px solid ${colors.black3};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='checkbox']:checked + label:before {
    font-family: iconcombo;
    content: '\uef41';
    font-size: 8px;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    background-color: ${colors.white};
  }
`
