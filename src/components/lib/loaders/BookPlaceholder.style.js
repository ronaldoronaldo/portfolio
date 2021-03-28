import styled from 'styled-components'
import { sizes } from 'config/ui'
import { AnimatedBg } from 'styles/common/Animation.styles'

export const BookPlaceholderStyle = styled.div`
  width: 152px;
  height: 228px;
  margin-right: 16px;
  border-radius: 1px 10px 10px 1px;
  ${AnimatedBg};

  @media (max-width: ${sizes.mdScreen}px) {
    width: 120px;
    height: 180px;
    margin-right: 8px;
  }
`
