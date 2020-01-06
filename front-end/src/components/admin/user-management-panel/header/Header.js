import React from 'react'
import { colors } from 'config/ui'
import {
  Container,
  Row,
  Column
} from 'components/admin/user-management-panel/grid'
import RoundButton from 'components/admin/user-management-panel/round-button/RoundButton'
import Breadcrumb from 'components/admin/user-management-panel/breadcrumb'
import {
  HeaderContainer,
  ButtonsContainer,
  PathsContainer
} from './Header.styles'

const Header = () => {
  const mockedRoute = [
    { name: 'início', path: '/' },
    { name: 'Redes', path: '/' }
  ]

  return (
    <HeaderContainer>
      <Container>
        <Row style={{ alignItems: 'center' }}>
          <Column lg={6}>
            <PathsContainer>
              <Breadcrumb paths={mockedRoute} />
            </PathsContainer>
          </Column>
          <Column lg={6}>
            <ButtonsContainer>
              <RoundButton
                style={{
                  marginRight: 16
                }}
                iconName="bell"
                iconColor={colors.black4}
                numberOfNotifications="1"
                onClick={() => console.log('news')}
              />
              <RoundButton
                iconName="user"
                iconColor={colors.black4}
                onClick={() => console.log('user')}
              />
            </ButtonsContainer>
          </Column>
        </Row>
      </Container>
    </HeaderContainer>
  )
}

export default Header
