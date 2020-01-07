import styled, { css } from 'styled-components'
import { colors, spacing } from 'config/ui'

export const Page = styled.div`
  ${({selectedPage}) => css`
    background-color: ${
    selectedPage === 'curriculum' ? 
      colors.black6 :
      selectedPage === 'about me' ?
        colors.black4 : colors.black2
    };
  `}
  transition: background-color 0.3s ease-out;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IconsContainer = styled.div`
  ${({selectedPage}) => css`
      top: ${selectedPage === '' ? '48vh' : '20px'};
  `}
  transition: top 0.5s ease-in-out;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > button {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: transparent;
    margin-right: ${spacing.spacingLarge}px;
    margin-left: ${spacing.spacingLarge}px;
    transition: box-shadow 0.1s ease-out;
    &:hover {
      background-color: transparent;
      box-shadow: 10px 10px 25px 0 rgba(83, 101, 111, 0.4);
    }
    &:active {
      box-shadow: 0 0 0 0 rgba(83, 101, 111, 0.4);
    }
    > span {
     font-size: 70px; 
    }
  }
`

export const LogoImage = styled.img`
  ${({selectedPage}) => css`
    opacity: ${selectedPage === '' ? 1 : 0};
  `}
  transition: opacity 0.3s ease-out;
  margin-top: ${spacing.spacingLarge + 64}px;
  margin-bottom: ${spacing.spacingLarge + 32}px;
`