import styled from 'styled-components'
import { sizes } from 'config/ui'

export const StyledProjects = styled.div`
  width: 100%;
  height: auto;
  padding-right: 16px;
  max-width: 429px;

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 278px;
  }
`

export const Cover = styled.a`
  width: 100%;
  max-width: 429px;
  height: auto;
  overflow: hidden;
  border-radius: ${sizes.radius}px;
  cursor: pointer;
  > img {
    width: 100%;
    max-width: 429px;
    height: auto;
    vertical-align: top;
    border-radius: 10px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 278px;
    > img {
      max-width: 278px;
    }
  }
`
