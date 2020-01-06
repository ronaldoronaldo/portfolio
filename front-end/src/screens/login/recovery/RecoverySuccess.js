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
import { LOGIN_PATH } from 'routes'

const RecoverySuccess = props => {
  return (
    <Container>
      <Row flexstart>
        <Column lg={6}>
          <ContainerLeftStyle />
        </Column>
        <Column lg={6}>
          <ContainerRightStyle>
            <Title
              text="Olá, Caio"
              size={1}
              sizeMobile={3}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <ButtonNotMeStyle
              text="Não é você?"
              size="small"
              bgColorHover={'none'}
              textColorHover={colors.black4Dark}
              onClick={() => console.log('ok')}
            />
            <TextCodeStyle>Anote o seu código de acesso:</TextCodeStyle>
            <Title
              text="CDA9834"
              size={2}
              sizeMobile={2}
              textAlignMobile="center"
              style={{ margin: 0 }}
            />
            <ButtonStyle
              text="Entrar"
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
