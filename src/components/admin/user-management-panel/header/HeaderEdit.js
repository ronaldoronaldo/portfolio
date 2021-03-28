import React from 'react'
import {
  HeaderStyle,
  HeaderLeftWrapper,
  HeaderRightWrapper
} from 'styles/common/Common.styles'
import { IconButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import { colors } from 'config/ui'
import { withRouter } from 'react-router-dom'

const HeaderEdit = ({ title, history, actions, exclude, print, ...rest }) => {
  return (
    <HeaderStyle>
      <HeaderLeftWrapper>
        <IconButton
          iconName="arrow-left"
          color={colors.black4}
          onClick={() => history.goBack()}
        />
        <Title text={title} size={5} sizeMobile={5} />
      </HeaderLeftWrapper>
      {actions && (
        <HeaderRightWrapper>
          {print && (
            <IconButton
              iconName="badge-ID"
              text="Imprimir carteirinha"
              primary
              margin={16}
              style={{
                iconSize: 10
              }}
            />
          )}
          {exclude && (
            <IconButton
              iconName="trash"
              color={colors.black4}
              style={{
                border: '1px solid ' + colors.black2,
                width: 40,
                marginLeft: 8,
                marginRight: 18
              }}
            />
          )}
        </HeaderRightWrapper>
      )}
    </HeaderStyle>
  )
}

export default withRouter(HeaderEdit)
