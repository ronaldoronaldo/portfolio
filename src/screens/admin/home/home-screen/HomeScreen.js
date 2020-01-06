import React from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import { AdminOptionButtonsContainer } from './HomeScreen.style'
import CardButton from 'components/admin/home/card-button/CardButton'
import { ADMIN_CHOOSE_CLIENT_PATH } from 'config/vars'


const HomeScreen = props => {

  const redirectTo = (path) => {
    props.history.push(path)
  }

  return (
    <Container>
      <AdminOptionButtonsContainer>
        <CardButton
          onClick={() => console.log('add client')}
          iconName={'add-circle'}
          title={'Cadastro de novos clientes'}
          subtitle={'Cadastro'}
        />
        <CardButton
          onClick={() => redirectTo(ADMIN_CHOOSE_CLIENT_PATH)}
          iconName={'settings'}
          title={'Gerenciar cliente'}
          subtitle={'Cadastro'}
        />
      </AdminOptionButtonsContainer>
    </Container>
  )
}

export default HomeScreen
