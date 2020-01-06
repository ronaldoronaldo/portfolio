import styled, { css } from 'styled-components'
import { sizes, colors } from 'config/ui'

export const NotificationContainerStyle = styled.div`
  ${({ theme }) => css`
    background: ${theme === 'error' ? colors.red3 : colors.green3};
  `}
  display: flex;
  flex-direction: column;
  width: 444px;
  height: 91px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  padding: ${sizes.padding}px;
  box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 40%;
  top: 5%;
  z-index: 3;
`

export const NotificationTitleStyle = styled.div`
  ${({ theme }) => css`
    color: ${theme === 'error' ? colors.red2 : colors.green2};
  `}
  font-size: ${sizes.text}px;
  margin-bottom: 8px;
`

export const NotificationMessageStyle = styled.div`
  ${({ theme }) => css`
    color: ${theme === 'error' ? colors.red1 : colors.green1};
  `}
  font-size: ${sizes.text};
`
