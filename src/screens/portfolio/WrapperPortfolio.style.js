import styled, { css } from 'styled-components'
import { colors, spacing, sizes } from 'config/ui'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 ${spacing.small}px;
  @media (min-width: ${sizes.mdScreen}px) {
    padding: 0;
  }
`

export const IconsContainer = styled.div`
  ${({selectedPage}) => css`
      top: ${selectedPage ? '20px' : '48vh'};
      padding: 0 ${spacing.medium}px;
      transition: top 0.5s ease-in-out;
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
        transition: box-shadow 0.1s ease-out;
        &:hover {
          > span {
           color: ${
            selectedPage === 'curriculum' ?
              colors.portGreen :
              selectedPage === 'about-me' ?
                colors.white : colors.black4
            };
          }
          background-color: transparent;
          ${selectedPage === 'curriculum' && `
            background-color: ${colors.portGreen};
            > span { color: ${colors.portBlack}; }
          `}
          ${selectedPage === 'about-me' && `
            > span { color: ${colors.white}; }
          `}
          ${(selectedPage === 'examples' || selectedPage === '') && `
            box-shadow: 10px 10px 25px 0 rgba(83, 101, 111, 0.4);
          `}
        }
        &:active {
          box-shadow: 0 0 0 0 rgba(83, 101, 111, 0.4);
        }
        > span {
          transition: none;
          font-size: 70px;
          color: ${
          selectedPage === 'curriculum' ?
            colors.portGreen :
            selectedPage === 'about-me' ?
              colors.black3 : colors.black4
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
  transition: opacity 0.4s ease-out;
  margin-top: ${spacing.large + 64}px;
  margin-bottom: ${spacing.large + 32}px;
  @media (max-width: ${sizes.mdScreen}px) {
    width: 255px;
  } 
`

export const IconsBorder = styled.div`
  ${({selectedPage}) => css`
    border-bottom: 2px solid;
    border-color: ${
    selectedPage === 'curriculum' ?
      colors.portGreen :
      selectedPage === 'about-me' ?
        colors.black3 : colors.black3
    };
    width: ${selectedPage === '' ? 0 : 100}%;
    transition: width 0.5s ease-out;
    position: absolute;
    top: 100px;
    @media (min-width: ${sizes.mdScreen}px) {
      width: ${selectedPage === '' ? 0 : 800}px;
      top: 160px;
      border-bottom: 4px solid;
      border-color: ${
      selectedPage === 'curriculum' ?
        colors.portGreen :
        selectedPage === 'about-me' ?
          colors.black3 : colors.black3
      };
    } 
  `}
`

export const PageContent = styled.div`
  ${({unlock3}) => css`
    opacity: ${unlock3 ? 1 : 0};
    transition: opacity 0.5s ease-out;
    width: 100%;
    @media (min-width: ${sizes.mdScreen}px) {
      width: 800px;
    }
  `}
`