import styled from 'styled-components'
import { sizes, colors, fontWeights } from 'config/ui'
import { Link } from 'react-router-dom'

export const StyledNewsItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 220px;
  height: auto;
  margin-right: 16px;
  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 192px;
  }
`

export const Cover = styled(Link)`
  width: 100%;
  max-width: 220px;
  height: auto;
  overflow: hidden;
  border-radius: ${sizes.radius}px;
  > img {
    width: 100%;
    max-width: 220px;
    height: auto;
    vertical-align: top;
    border-radius: 10px;
  }

  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &::after {
  content: '${props => props.title}';
    font-size: 20px;
    color: ${colors.white};
    max-width: 155px;
    line-height: 1.5;
    text-align: center;
    position: absolute;
    padding-bottom: 10%;
    font-weight: ${fontWeights.bold};
  }

  @media (max-width: ${sizes.mdScreen}px) {
    max-width: 192px;

    img {
      max-width: 192px;
    }
  }
`
