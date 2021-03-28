import styled from 'styled-components'
import { sizes } from 'config/ui'
import { AnimatedBg } from 'styles/common/Animation.styles'

export const ProjectsPlaceholderStyle = styled.div`
  height: 273px;
  width: 414px;
  margin-right: 16px;
  ${AnimatedBg};
  border-radius: 10px;

  @media (max-width: ${sizes.lgScreen}px) {
    width: 280px;
    height: 185px;
  }
`
