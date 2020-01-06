import styled from 'styled-components'
import { sizes } from 'config/ui'

export const StyledBook = styled.div`
  width: 100%;
  height: auto;
  margin-right: 16px;
  max-width: 152px;

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 120px;
  }
`

export const Cover = styled.a`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: ${sizes.radius}px;
  max-width: 152px;

  cursor: pointer;
  > img {
    width: 100%;
    height: auto;
    vertical-align: top;
    border-radius: 10px;
    max-width: 152px;
  }

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 120px;

    > img {
      max-width: 120px;
    }
  }
`
