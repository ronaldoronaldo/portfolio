import styled, { css } from 'styled-components'
import { sizes, colors, spacing } from 'config/ui'

export const ContainerStyle = styled.div`
  padding-top: ${spacing.spacingLarge}px;
  @media (min-width: ${sizes.mdScreen}px) {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`

export const RecoveryContainerStyle = styled.div`
  width: 100%;
  @media (min-width: ${sizes.mdScreen}px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

export const ContainerBulletsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  align-items: flex-end;
  padding-bottom: 32px;
  height: 120px;
`

export const NextButtonWrapper = styled.div`
  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom || '0'}px;
  `}
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${colors.black2};
  box-shadow: 0 15px 25px 0 rgba(83, 101, 111, 0.18);
  @media (max-width: ${sizes.mdScreen}px) {
    width: 100%;
    box-shadow: none;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid ${colors.black2};
  }
`

export const TitleContainerStyle = styled.div`
  max-width: 320px;
  margin-left: 20px;
  margin-top: 38px;
  @media (min-width: ${sizes.mdScreen}px) {
    margin: 0 auto;
  }
`
