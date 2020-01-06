import styled from 'styled-components'
import { sizes } from 'config/ui'
import { AnimatedBg } from 'styles/common/Animation.styles'

export const BookPlaceholderStyle = styled.div`
  ${AnimatedBg};
  width: 100%;
  height: 228px;

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 120px;
    height: 180px;
  }
`
