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
      > div { 
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
            transition: none;
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
      }
  `}
`

// export const IconBox = styled.div`
//   ${({selectedPage}) => css`
//     height: 82px;
//     @media (min-width: ${sizes.lgScreen}px) {
//       height: 141px;
//     }
//     ${(selectedPage === 'examples') && `
//       &:hover {
//         border-bottom: 6px solid ${colors.black2Dark};
//       }
//     `}
//   `}
// `
export const IconBox = styled.div`

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
        colors.red2 : colors.black2Dark
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
          colors.red2 : colors.black2Dark
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