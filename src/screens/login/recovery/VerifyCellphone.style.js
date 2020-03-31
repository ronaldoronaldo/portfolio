import styled from 'styled-components'
import { sizes, colors } from 'config/ui'
import backgroundMock from 'assets/images/success-forget-password.svg'
import { Button } from 'components/lib/buttons'

export const ContainerLeftStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: ${sizes.lgScreen}px) {
    justify-content: center;
    padding-right: 0px;
    height: 50vh;    
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
    width: 160px;
    padding: 0;
  }
`

export const SendAgainButton = styled(Button) `
  color: ${colors.black3};
  background: ${colors.white};
  margin-top: 26px;
  &:active {
    color: ${colors.black5};
  }

  @media (min-width: ${sizes.lgScreen}px) {
    display: none;
  }
`

export const CellphoneTextCodeStyle = styled.p`
  color: ${colors.black5};
  font-size: ${sizes.text}px;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 2px;
  @media (min-width: ${sizes.lgScreen}px) {
    margin-bottom: 50px;
  }
`

export const ContainerSpinnerStyle = styled.div`
  width: 100%;
  background: ${colors.white};
  text-align: center;
  margin-top: 26px;
`
