import styled from 'styled-components'
import { colors } from 'config/ui'

export const StyledButton = styled.button`
  position: absolute;
  padding: 0;
  right: -20px;
  outline: none;
  z-index: 2;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid ${colors.gray1};
  width: 40px;
  height: 40px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`
