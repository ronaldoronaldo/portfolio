import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  ${({ color, size }) => css`
    display: inline-block;
    border-top: 2px solid ${color};
    border-right: 2px solid transparent;
    border-radius: 50%;
    width: ${size || 1.1}em;
    height: ${size || 1.1}em;
    animation: ${spin} 0.8s linear infinite;
  `};
`
