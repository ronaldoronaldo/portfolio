import React, { useState } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import {
  ChooseClientWrapper,
  ChooseClientContainer
} from './ChooseClientScreen.style'
import Title from 'components/lib/titles/Title'
import Select from 'components/lib/selects/Select'
import Button from 'components/lib/buttons/Button'
import IconButton from 'components/lib/buttons/IconButton'
import { colors, spacing } from 'config/ui'
import { USER_MANAGEMENT_ROOT_PATH } from 'routes'

const ChooseClientScreen = props => {
  const [value, setValue] = useState('Selecione uma cidade')
  const [enableButton, setEnableButton] = useState(false)
  const [activeSelectButton, setActiveSelectButton] = useState(false)

  const redirectTo = path => {
    props.history.push(path)
  }

  const handleSelectValue = value => {
    setValue(value)
    setEnableButton(true)
    setActiveSelectButton(true)
  }

  return (
    <Container>
      <ChooseClientWrapper>
        <ChooseClientContainer>
          <Title
            textAlign="left"
            text={'Gerenciar Cliente'}
            sizeMobile={4}
            size={4}
            style={{
              marginTop: 0,
              marginBottom: spacing.medium
            }}
          />
          <Select
            text={value}
            activeSelectButton={activeSelectButton}
            onChange={value => handleSelectValue(value)}
            label={'Selecione o cliente'}
            items={[
              'SOMOS',
              'Rede Arvore Educação Sul',
              'Rede Arvore Educação Norte',
              'Rede Arvore Educação Oeste',
              'Rede Arvore Educação Leste',
              'Colégio Teste 01'
            ]}
            maxWidth={556}
            dropdownStyle={{
              top: 138
            }}
          />
          <Button
            text={'Avançar'}
            onClick={() => redirectTo(USER_MANAGEMENT_ROOT_PATH)}
            style={{
              marginBottom: spacing.small,
              marginTop: spacing.small
            }}
            isEnabled={enableButton}
          />
          <IconButton
            text={'Adicionar cliente'}
            iconName={'add'}
            onClick={() => console.log('add client')}
            style={{
              border: '1px solid ' + colors.black2,
              height: 48
            }}
            margin={14}
            iconSize={18}
            color={colors.black4}
          />
        </ChooseClientContainer>
      </ChooseClientWrapper>
    </Container>
  )
}

export default ChooseClientScreen
