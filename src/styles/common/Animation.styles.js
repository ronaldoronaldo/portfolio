import { css, keyframes } from 'styled-components'
import { colors } from 'config/ui'

const bg = keyframes`
  from {
    background-position: -300px 0;
  }
  to {
    background-position: 300px 0;
  }
`

export const AnimatedBg = css`
  animation: ${bg} 3s linear infinite;
  animation-fill-mode: forwards;
  background: linear-gradient(
    to right,
    ${colors.black1},
    ${colors.black1Light} 50%,
    ${colors.black1} 100%
  );
`
