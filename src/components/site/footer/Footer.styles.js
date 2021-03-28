import styled from 'styled-components'
import { colors, sizes, fontWeights } from 'config/ui'
import { Container as Grid } from 'components/lib/grid'

export const Container = styled.div`
  width: 100%;
  height: 72px;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  @media (max-width: ${sizes.mdScreen}px) {
    display: none;
  }
`

export const ContainerGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FooterCopyright = styled.p`
  font-size: ${sizes.bodySmall}px;
  color: ${colors.black3};
`

export const ContainerButtonFooter = styled.div`
  display: flex;
`

export const ButtonFooter = styled.a`
  padding: 0 ${sizes.padding}px;
  height: 40px;
  border-radius: 10px;
  margin-right: 16px;
  background: ${colors.white};
  border: 1px solid ${colors.black2};
  color: ${colors.black4};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: ${fontWeights.semiBold};

  &:hover {
    border: 1px solid ${colors.black3};
    color: ${colors.black5};
  }

  &:last-child {
    margin-right: 0;
  }
`
