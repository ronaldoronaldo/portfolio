import styled, { css } from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'

export const Tag = styled.div`
  min-width: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  font-size: 12px;
  color: ${colors.purple3};
  background-color: ${colors.purple1};
  border: 1px solid ${colors.purple2};
  margin-left: 8px;
  border-radius: 16px;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
  height: 24px;
`

export const ShowTagsContainer = styled.div`
  width: 100%;
  min-height: 148px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-radius: 9px;
  border: 1px solid ${colors.black3};
  padding: 20px 14px;
  position: relative;
`

export const ShowTagsLabel = styled.div`
  ${({ haveTags }) => css`
    transition: ${haveTags
      ? 'transform 0.2s ease-in, font-size 0.2s ease-in'
      : 'transform 0.2s ease-out, font-size 0.2s ease-out'};
    position: absolute;
    font-size: ${haveTags ? sizes.label : sizes.text}px;
    margin: 10px 0;
    top: -2px;
    transform: ${haveTags ? 'translate3d(0, -84%, 0)' : 'translate3d(0, 0, 0)'};
    padding: 5px ${haveTags ? 5 : 0}px;
    color: ${colors.black3};
    background: ${haveTags ? colors.white : 'none'};
    cursor: unset;
    display: flex;
    flex-direction: row;
  `}
`
