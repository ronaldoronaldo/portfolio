import styled from 'styled-components'
import { sizes, shadows } from 'config/ui'

export const StyledProjects = styled.div`
  height: 273px;
  padding-right: 16px;
  width: 414px;
  outline: none;

  @media (max-width: ${sizes.lgScreen}px) {
    width: 280px;
    height: 200px;
  }
`

export const Cover = styled.a`
  width: 414px;
  height: 273px;
  overflow: hidden;
  cursor: pointer;
  display: block;
  border-radius: 10px;
  box-shadow: ${shadows.shadowDown4};
  background: #fff;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.03);
    position: relative;
    z-index: 3;
    box-shadow: ${shadows.shadowDown4};

    > img {
      opacity: 0.75;
    }
  }

  > img {
    width: 414px;
    height: auto;
    vertical-align: top;
    border-radius: 10px;
    transition: opacity 0.2s ease-in;
  }

  @media (max-width: ${sizes.lgScreen}px) {
    width: 280px;
    height: auto;

    > img {
      width: 280px;
    }
  }
`
