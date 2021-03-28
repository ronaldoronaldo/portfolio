import styled from 'styled-components'
import { sizes, colors } from 'config/ui'
import backgroundMock from 'assets/images/success-forget-password.svg'
import { Button } from 'components/lib/buttons'

export const ContainerLeftStyle = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right:  0;
  background-size: 100% 100%;
  height: 40vh;
  @media (min-width: ${sizes.lgScreen}px) {
    padding-right:  50px;
    height: 100vh;
    background-position: 100%;
    justify-content: flex-end;
  }
`

export const ContainerRightStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: ${sizes.lgScreen}px) {
    align-items: flex-start;
    height: 100vh;
    margin-left: 0;
  }
`

export const ButtonStyle = styled(Button) `
  @media (min-width: ${sizes.lgScreen}px) {
    text-align: left;
    width: 124px;
    padding: 0;
  }
`

export const ButtonNotMeStyle = styled(Button) `
  color: ${colors.black5};
  background: ${colors.white};

  &:active {
    color: ${colors.black5};
  }

  @media (min-width: ${sizes.lgScreen}px) {
    width: 180px;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 0px;
  }
`

export const TextCodeStyle = styled.p`
  color: ${colors.black4};
  font-size: ${sizes.text}px;
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: ${sizes.lgScreen}px) {
    margin-top: 44px;
  }
`
