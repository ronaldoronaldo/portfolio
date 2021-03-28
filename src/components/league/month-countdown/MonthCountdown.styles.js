import styled,  { css } from 'styled-components'
import { colors, sizes, fontWeights } from 'config/ui'

export const CountdownWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${theme.wrapper.width};
    padding: ${theme.wrapper.padding};
  `};
`

CountdownWrapper.defaultProps = {
  theme: {
    wrapper: {
      width: 'auto',
      padding: '0'
    }
  }
}

export const UnityBox = styled.div`
  ${({ theme, isTheFirstBox }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.box.padding};
    background-color: ${theme.box.bgColor};
    border-radius: ${theme.box.borderRadius};
    margin-left: ${isTheFirstBox ? 0 : theme.box.marginLeft};
    width: ${theme.box.width};
    height: ${theme.box.height};

    @media (min-width: ${sizes.mScreen}px) {
      margin-left: ${theme.box.marginLeftBig};
      width: ${theme.box.widthBig};
      height: ${theme.box.heightBig};
    }
  `};
`

UnityBox.defaultProps = {
  theme: {
    box: {
      width: '28px',
      widthBig: '35px',
      height: 'auto',
      heightBig: 'auto',
      padding: '0',
      marginLeft: '7px',
      marginLeftBig: '15px',
      bgColor: 'transparent',
      borderRadius: '0'
    }
  }
}

export const UnityNumber = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.number.fontSize}px;
    font-weight: ${fontWeights.bold};
    color: ${theme.number.color};
    @media (min-width: ${sizes.mScreen}px) {
      font-size: ${theme.number.fontSizeBig}px;
    }
  `};
`

UnityNumber.defaultProps = {
  theme: {
    number: {
      fontSize: sizes.text,
      fontSizeBig: 25,
      color: colors.black6
    }
  }
}

export const UnityLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.label.fontSize}px;
    color: ${theme.label.color};
    font-weight: ${fontWeights.regular};
    @media (min-width: ${sizes.mScreen}px) {
      font-size: ${theme.label.fontSizeBig}px;
    }
  `};
`

UnityLabel.defaultProps = {
  theme: {
    label: {
      fontSize: sizes.bodySmall,
      fontSizeBig: sizes.text,
      color: colors.black4
    }
  }
}

export const StyledDots = styled.span`
  font-size: ${sizes.text}px;
  color: ${colors.opacity02};
  margin-left: 7px;
  @media (min-width: ${sizes.mScreen}px) {
    margin-left: 15px;
    font-size: 26px;
    color: ${colors.opacity01};
  }
`
