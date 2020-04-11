import styled, { css } from 'styled-components'
import { colors, spacing, sizes } from 'config/ui'
import {shortAnimation} from './WrapperPortfolio'


export const Page = styled.div`
  ${({selectedPage}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 ${spacing.small}px;
    @media (min-width: ${sizes.mdScreen}px) {
      padding: 0;
    }
    ${selectedPage === 'examples' && `
      padding: 0;
    `}
  `}
`

export const IconsContainer = styled.div`
  ${({selectedPage, animationDelay, changingPages, opacityController}) => css`
      top: ${changingPages ? '-400px' : selectedPage ? '20px' : '48vh'};
      opacity: ${opacityController ? '1' : '0'};
      padding: 0 ${spacing.medium}px;
      transition: all ${shortAnimation}s ease-in-out;
      transition-delay: ${animationDelay}s;
      position: absolute;
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;;
      align-items: center;
      max-width: 400px;
      @media (min-width: ${sizes.mdScreen}px) {
        max-width: 700px;
      }
      > Button {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: transparent;
        transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;

        ${selectedPage === 'examples' && `
          > span { color: ${colors.black3}; }
        `}
        
        &:hover {
          > span {
           color: ${
            selectedPage === 'curriculum' ?
              colors.portGreen :
              selectedPage === 'about-me' ?
                colors.red3 : selectedPage === 'examples' ? colors.black4Dark : colors.black4
            };
          }
          background-color: transparent;
          ${selectedPage === '' && `
             transform: scale(1.04);
             box-shadow: 10px 10px 25px 0 rgba(83, 101, 111, 0.4);
          `}
          ${selectedPage === 'curriculum' && `
            background-color: ${colors.portGreen};
            > span { color: ${colors.portBlack}; }
          `}
          ${selectedPage === 'examples' && `
            border: 4px solid ${colors.black2Dark};
          `}
        }
        &:active {
          box-shadow: 0 0 0 0 rgba(83, 101, 111, 0.4);
        }
        > span {
          font-size: 70px;
          color: ${
          selectedPage === 'curriculum' ?
            colors.portGreen :
            selectedPage === 'about-me' ?
              colors.red2 : colors.black4
          };
        }
        @media (max-width: ${sizes.mdScreen}px) {
          width: 70px;
          height: 70px;
          > span { 
            font-size: 40px;          
          }
        }
      }
  `}
`

export const LogoImage = styled.img`
  ${({selectedPage}) => css`
    opacity: ${selectedPage === '' ? 1 : 0};
  `}
  transition: opacity ${shortAnimation - 0.1}s ease-out;
  margin-top: ${spacing.large + 64}px;
  margin-bottom: ${spacing.large + 32}px;
  @media (max-width: ${sizes.mdScreen}px) {
    width: 255px;
  } 
`

export const IconsBorder = styled.div`
  ${({selectedPage, animationDelay, expand}) => css`
    border-bottom: 2px solid;
    border-color: ${
    selectedPage === 'curriculum' ?
      colors.portGreen :
      selectedPage === 'about-me' ?
        colors.red2 : colors.black2Dark
    };
    width: ${expand ? 100 : 0}%;
    transition: all ${shortAnimation}s ease-out;
    transition-delay: ${selectedPage === '' ? animationDelay : 0}s;
    position: absolute;
    top: 100px;
    @media (min-width: ${sizes.mdScreen}px) {
      width: ${expand ? 800 : 0}px;
      top: 160px;
      border-bottom: 4px solid;
      border-color: ${
      selectedPage === 'curriculum' ?
        colors.portGreen :
        selectedPage === 'about-me' ?
          colors.red2 : colors.black2Dark
      };
    } 
  `}
`

export const PageContent = styled.div`
  ${({showPageContent, animationDelay}) => css`
    opacity: ${showPageContent ? 1 : 0};
    transition: opacity ${shortAnimation}s ease-out;
    transition-delay: ${animationDelay}s;
    width: 100%;
    @media (min-width: ${sizes.mdScreen}px) {
      width: 800px;
    }
  `}
`