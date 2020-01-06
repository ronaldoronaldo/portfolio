import React from 'react'
import {
  Container,
  Row,
  Column
} from 'components/admin/user-management-panel/grid'
import { colors } from 'config/ui'
import {
  HeaderContainer,
  LeaveContainer,
  LogoContainer,
  StyledButton
} from './Header.styles'
import logo from 'assets/images/logo-arvore-edu.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <Container style={{padding: '0 16px'}}>
        <Row style={{ alignItems: 'center' }}>
          <Column lg={6}>
            <LogoContainer>
              <img src={logo} />
            </LogoContainer>
          </Column>
          <Column lg={6}>
            <LeaveContainer>
              <StyledButton
                text={'Sair'}
                onClick={() => console.log('logut')}
                bgColorHover={colors.black1}
                textColorHover={colors.black4Light}
              />
            </LeaveContainer>
          </Column>
        </Row>
      </Container>
    </HeaderContainer>
  )
}

export default Header
