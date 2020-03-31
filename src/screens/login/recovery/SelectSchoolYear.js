import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerBulletsStyle,
  ContainerStyle,
  ContainerBackgroundStyle,
  ContainerTitle
} from './SelectSchoolYear.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import Bullets from 'components/lib/bullets'
import { Button } from 'components/lib/buttons'
import Select from 'components/lib/selects/Select'
import { spacing } from 'config/ui'
import { RECOVERY_SUCCESS_PATH, FIRST_NAME_ANSWER_PATH } from 'routes'
import Alert from 'components/lib/alerts/Alert'

const SelectSchoolYear = props => {
  const [value, setValue] = useState('Selecione o ano escolar')
  const [enableButton, setEnableButton] = useState(false)
  const [sendSchoolYearLoading, setSendSchoolYearLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)

  const handleSelectValue = value => {
    setValue(value)
    setEnableButton(true)
  }

  const sendSchoolYear = () => {
    if (!enableButton) {
      return
    }
    setSendSchoolYearLoading(true)
    //mock sendSchoolYearQuery
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(2000)
      .then(res => {
        setSendSchoolYearLoading(false)
        const mockedResponse = 'valid information'
        if (mockedResponse === 'user found') {
          props.history.push(RECOVERY_SUCCESS_PATH)
          return
        }
        if (mockedResponse === 'valid information') {
          props.history.push(FIRST_NAME_ANSWER_PATH)
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
          text="Qual é o seu ano escolar?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{ maxWidth: 360 }}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Select
          items={['Ensino infantil', '1º Ano', '2º Ano', '3º Ano', '4º Ano']}
          text={value}
          onChange={handleSelectValue}
          searchInputLabel={'Busque por ano escolar'}
          headerTitle="Selecione o ano escolar"
          maxWidth={400}
          label={'Selecione o ano escolar'}
          activeSelectButton={enableButton}
        />
        <Button
          text="Avançar"
          isEnabled={enableButton}
          onClick={sendSchoolYear}
          style={{ marginTop: spacing.small }}
          loading={sendSchoolYearLoading}
        />
        <ContainerBulletsStyle>
          <Bullets active={6} />
        </ContainerBulletsStyle>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default SelectSchoolYear
