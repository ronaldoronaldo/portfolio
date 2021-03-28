import styled from 'styled-components'
import { sizes } from 'config/ui'

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  height: auto;
  margin: 0 auto;

  @media (min-width: ${sizes.sScreen}px) {
    width: 768px;
    padding: 40px 20px;
  }

  @media (min-width: ${sizes.mScreen}px) {
    width: 992px;
  }

  @media (min-width: ${sizes.lScreen}px) {
    width: 1200px;
  }

  @media (min-width: ${sizes.xlScreen}px) {
    width: 1600px;
  }
`