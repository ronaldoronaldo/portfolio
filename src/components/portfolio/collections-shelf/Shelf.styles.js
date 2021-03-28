import styled, {css} from 'styled-components'
import { colors, sizes } from 'config/ui'

export const ShelfWrapper = styled.section`
  ${({ paddingRight }) => css`
    paddingRight: 0;
    @media (max-width: ${sizes.sScreen}px) {
      padding-right: ${paddingRight || 0}px;
      margin-bottom: 32px;
      .slick-track {
        padding-left: 7px;
      }
  }
  `};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: ${sizes.sScreen}px) {
    margin: 0px 15px 10px 15px;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  color: ${colors.black};

  &:first-letter {
    text-transform: uppercase;
  }

  @media (max-width: ${sizes.sScreen}px) {
    font-size: ${sizes.h['3']}px;
  }
`

export const ViewAll = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${sizes.smallText}px;
  color: ${colors.gray};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 150ms ease;

  > svg {
    margin-left: 5px;
    font-size: ${sizes.text}px;
  }

  &:hover {
    color: ${colors.black};
  }
`
