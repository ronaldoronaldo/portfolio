import styled from 'styled-components'
import { colors, fontWeights } from 'config/ui'

export const ContainerPaymentStatus = styled.div`
  display: flex;
  width: 70px;
  justify-content: flex-end;
  position: relative;

  > div {
    width: 10px;
    height: 10px;

    span {
      width: 161px;
      top: -32px;
      left: -30px;
      opacity: 0;
      transition: 0.2s linear;
      visibility: hidden;
    }
    &:hover {
      span {
        opacity: 1;
        visibility: inherit;
      }
    }
  }
`

export const RecoverWarning = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors.orange2};
  background-color: ${colors.orange1};
  color: ${colors.orange3};
  font-size: 13px;
  align-items: center;
  padding: 0 16px;
  margin-top: 10px;
  margin-bottom: 32px;
  font-weight: ${fontWeights.bold};
`
