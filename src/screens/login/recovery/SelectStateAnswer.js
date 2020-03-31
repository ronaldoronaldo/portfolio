import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerBulletsStyle,
  ContainerStyle,
  ContainerBackgroundStyle,
  ContainerTitle
} from './SelectStateAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import Bullets from 'components/lib/bullets'
import { Button } from 'components/lib/buttons'
import Select from 'components/lib/selects/Select'
import { spacing } from 'config/ui'
import { RECOVERY_SUCCESS_PATH, SELECT_SCHOOL_CITY_PATH } from 'routes'
import Alert from 'components/lib/alerts/Alert'

const SelectStateAnswer = props => {
  const [value, setValue] = useState('Selecione um estado')
  const [enableButton, setEnableButton] = useState(false)
  const [sendSchoolStateLoading, setSendSchoolStateLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)

  const handleSelectValue = value => {
    setValue(value)
    setEnableButton(true)
  }

  const sendSchoolState = () => {
    if (!enableButton) {
      return
    }
    setSendSchoolStateLoading(true)
    //mock sendSchoolStateQuery
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(2000)
      .then(res => {
        setSendSchoolStateLoading(false)
        const mockedResponse = 'valid information'
        // props.history.push(Select school state path)
        if (mockedResponse === 'user found') {
          props.history.push(RECOVERY_SUCCESS_PATH)
          return
        }
        if (mockedResponse === 'valid information') {
          props.history.push(SELECT_SCHOOL_CITY_PATH)
          return
        }
        setAlertData({
          title: 'Não encontrado',
          message: 'Não encontramos nenhum usuário para este estado.',
          textButton: 'fechar'
        })
      })
      .catch(() => {
        setAlertData({
          title: 'Problema no servidor',
          message: 'Algo deu errado, tente novamente mais tarde.',
          textButton: 'fechar'
        })
      })
  }

  const goBack = () => {
    props.history.goBack()
  }

  return (
    <ContainerStyle>
      {alertData && (
        <Alert
          title={alertData.title}
          message={alertData.message}
          textButton={alertData.textButton}
          onClick={() => setAlertData(null)}
        />
      )}
      <BackButton
        onClick={goBack}
        style={{
          marginTop: 32,
          marginLeft: 16,
          position: 'absolute',
          left: 0,
          top: -15
        }}
      />
      <ContainerBackgroundStyle />
      <ContainerTitle>
        <Title
          text="Em que estado fica a sua escola?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Select
          items={['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia']}
          text={value}
          onChange={handleSelectValue}
          searchInputLabel={'Busque por estado'}
          headerTitle="Selecione um estado"
          maxWidth={400}
          label={'Selecione um estado'}
          activeSelectButton={enableButton}
        />
        <Button
          text="Avançar"
          isEnabled={enableButton}
          onClick={sendSchoolState}
          style={{ marginTop: spacing.small }}
          loading={sendSchoolStateLoading}
        />
        <ContainerBulletsStyle>
          <Bullets active={3} />
        </ContainerBulletsStyle>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default SelectStateAnswer
