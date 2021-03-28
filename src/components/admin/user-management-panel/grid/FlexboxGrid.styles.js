import styled, { css } from 'styled-components'
import { sizes, spacing } from 'config/ui'

export const ContainerStyle = styled.div`
  width: 100%;
  padding: 0 44px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${sizes.mdScreen}px) {
  }

  @media (min-width: ${sizes.lgScreen}px) {
  }

  @media (min-width: ${sizes.xlgScreen}px) {
  }

  @media (min-width: ${sizes.xxlgScreen}px) {
    padding: 0 56px;
  }
`

export const RowStyle = styled.div`
  margin-left: -${spacing.mSmall}px;
  margin-right: -${spacing.mSmall}px;
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
    padding-left: ${spacing.mSmall}px;
    padding-right: ${spacing.mSmall}px;

    @media (min-width: ${sizes.mdScreen}px) {
      ${md && `width: ${(md / 12) * 100}%`};
      padding-left: ${spacing.mSmall}px;
      padding-right: ${spacing.mSmall}px;
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
