import styled, { css } from 'styled-components'
import { sizes, spacing } from 'config/ui'

export const ContainerStyle = styled.div`
  width: 100%;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${sizes.mdScreen}px) {
    width: 704px;
    padding: 0 ${spacing.spacingMedium}px;
  }

  @media (min-width: ${sizes.lgScreen}px) {
    width: 928px;
  }

  @media (min-width: ${sizes.xlgScreen}px) {
    width: 1136px;
  }

  @media (min-width: ${sizes.xxlgScreen}px) {
    width: 1336px;
  }
`

export const ContainerFluidStyle = styled.div`
  width: 100%;
  padding: 0 ${spacing.spacingSmall}px;

  @media (min-width: ${sizes.mdScreen}px) {
    padding: 0 ${spacing.spacingMedium}px;
  }
`
export const RowStyle = styled.div`
  margin-left: -${spacing.spacingSmall}px;
  margin-right: -${spacing.spacingSmall}px;
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => (props.flexstart ? 'flex-start' : 'baseline')};

  @media (min-width: ${sizes.mdScreen}px) {
    margin-left: -${spacing.medium}px;
    margin-right: -${spacing.medium}px;
  }
`
export const ColumnStyle = styled.div`
  ${({ sm = 12, md, lg, xlg, xxlg }) => css`
    position: relative;
    width: ${(sm / 12) * 100}%;
    padding-left: ${spacing.spacingXSmall}px;
    padding-right: ${spacing.spacingXSmall}px;

    @media (min-width: ${sizes.mdScreen}px) {
      ${md && `width: ${(md / 12) * 100}%`};
      padding-left: ${spacing.spacingSmall}px;
      padding-right: ${spacing.spacingSmall}px;
    }

    @media (min-width: ${sizes.lgScreen}px) {
      ${lg && `width: ${(lg / 12) * 100}%`};
    }

    @media (min-width: ${sizes.xlgScreen}px) {
      ${xlg && `width: ${(xlg / 12) * 100}%`};
    }

    @media (min-width: ${sizes.xxlgScreen}px) {
      ${xxlg && `width: ${(xxlg / 12) * 100}%`};
    }
  `};
`
