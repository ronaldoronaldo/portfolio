import styled from 'styled-components'
import { sizes, colors } from 'config/ui'
import { AnimatedBg } from 'styles/common/Animation.styles'

export const CollectionPlaceholderStyle = styled.div`
  width: 236px;
  height: 306px;
  margin-right: 16px;
  border-radius: 10px;
  background: ${colors.black1};
  ${AnimatedBg};

  @media (max-width: ${sizes.mdScreen}px) {
    width: 168px;
    height: 238px;
    margin-right: 8px;
  }
`
