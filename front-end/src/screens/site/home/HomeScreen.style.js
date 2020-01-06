import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'config/ui'
import { Container } from 'components/lib/grid'

export const ContainerStyle = styled(Container)`
  @media (max-width: ${sizes.smScreen}px) {
    padding-right: 0;
    padding-left: 16px;
  }
`

export const WrapperMenu = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.black2};
  margin-top: 18px;
  @media (max-width: ${sizes.smScreen}px) {
    text-align: center;
    justify-content: space-between;
  }
`

export const MenuItem = styled.a`
    margin-right: 32px;
    border-bottom: ${props =>
      props.active ? `2px solid ${colors.black5}` : 'none'};
    padding: 9px 0px;
    font-size: 16px;
    font-weight: ${fontWeights.semiBold};
    color: ${props => (props.active ? colors.black5 : colors.black3)};
    cursor: pointer;

  &:before {
    content: '${props => props.title}';
  }

  @media (max-width: ${sizes.smScreen}px) {
    width: 49%;
    margin-right: 0;

    &:before {
      content: '${props =>
        props.titleMobile ? props.titleMobile : props.title}';
    }
  }
`
