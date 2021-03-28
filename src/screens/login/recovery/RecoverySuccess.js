import React from 'react'
import { colors } from 'config/ui'
import {
  TextCodeStyle,
  ContainerRightStyle,
  ContainerLeftStyle,
  ButtonNotMeStyle,
  ButtonStyle
} from './RecoverySuccess.style'
import { Container, Column, Row } from 'components/lib/grid'
import Title from 'components/lib/titles/Title'
import { FontIcon } from 'components/lib/icons'
import { LOGIN_PATH } from 'routes'

const RecoverySuccess = props => {
  return (
    <Container>
      <Row flexstart>
        <Column lg={6}>
          <ContainerLeftStyle>
            <FontIcon iconName='mailbox' sizeMobile={200} size={250} color={colors.black2} />
          </ContainerLeftStyle>
        </Column>
        <Column lg={6}>
          <ContainerRightStyle>
            <Title
              text="Hi, Jack"
              size={1}
              sizeMobile={3}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <ButtonNotMeStyle
              text="Are you not jack?"
              size="small"
              bgColorHover={'none'}
              textColorHover={colors.black4Dark}
              onClick={() => props.history.goBack()}
            />
            <TextCodeStyle>Your access code is:</TextCodeStyle>
            <Title
              text="CDA9834"
              size={2}
              sizeMobile={2}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <ButtonStyle
              text="Back to login"
              onClick={() => props.history.push(LOGIN_PATH)}
              style={{ marginBottom: 16, marginTop: 44 }}
            />
          </ContainerRightStyle>
        </Column>
      </Row>
    </Container>
  )
}

export default RecoverySuccess
