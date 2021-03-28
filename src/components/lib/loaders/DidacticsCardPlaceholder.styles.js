import styled from 'styled-components'
import { sizes } from 'config/ui'
import { AnimatedBg } from 'styles/common/Animation.styles'

export const DidacticsCardPlaceholderStyle = styled.div`
  width: 312px;
  height: 184px;
  margin-right: 16px;
  border-radius: 10px;
  ${AnimatedBg};

  @media (max-width: ${sizes.lgScreen}px) {
    width: 312px;
    margin-right: 8px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    width: 280px;
    height: 170px;
    margin-right: 8px;
  }
`
