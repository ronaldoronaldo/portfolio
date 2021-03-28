import styled, { css } from 'styled-components'
import { colors, fontWeights } from 'config/ui'

export const Container = styled.div`
  ${({ minimize }) => css`
    display: flex;
    z-index: 9;
    flex-direction: column;
    height: 100%;
    position: relative;
    background-color: ${colors.white};
    border-right: 1px solid ${colors.black2};
    padding: 0 8px;
    align-items: ${minimize && 'flex-end'};
    width: 250px;

    > button {
      width: ${minimize ? '54px' : '100%'};
      min-height: 40px;
      background: #f4f7fd;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: ${minimize && 'flex-end'};
      font-size: 15px;
      font-weight: ${fontWeights.semiBold};
      border-radius: 10px;
      margin-bottom: 16px;
      background: none;
      cursor: pointer;
      transition: 0.1s linear;

      > span {
        margin-right: ${minimize ? 12 : 14}px;
        padding-left: ${minimize ? 0 : 8}px;
        color: #595a5c;
        transition: 0.1s linear;
      }

      &:hover {
        background: #f4f7fd;
        span {
          color: #a97ed1;
        }
      }
    }
  `}
`

export const Header = styled.header`
  ${({ minimize }) => css`
    display: flex;
    justify-content: ${minimize ? 'center' : 'space-between'};
    align-items: center;
    margin-bottom: 40px;
    margin-top: 18px;

    > img {
      margin-left: ${minimize ? -55 : 16}px;
    }

    > span {
      background-color: #f4f7fd;
      border-radius: 12px 0 0 12px;
      width: 22px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: ${minimize ? -23 : 0}px;
      cursor: pointer;
      transform: ${minimize && 'rotateY(180deg)'};

      &:before {
        margin-left: 5px;
      }
    }
  `}
`
