import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerBulletsStyle,
  ContainerStyle,
  ContainerTitle,
  ContainerBackgroundStyle
} from './SecretQuestionAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import Bullets from 'components/lib/bullets'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import { RECOVERY_SUCCESS_PATH, SELECT_SCHOOL_STATE_PATH } from 'routes'
import Alert from 'components/lib/alerts/Alert'

const SecretQuestionAnswer = props => {
  const [value, setValue] = useState('')
  const [enableButton, setEnableButton] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [
    confirmingSecretAnswerLoading,
    setConfirmingSecretAnswerLoading
  ] = useState('')

  const handleValueInput = evt => {
    if (evt.target.value.length > 0) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
    setValue(evt.target.value)
  }

  const sendSecretAnswer = () => {
    if (!enableButton) {
      return
    }
    setConfirmingSecretAnswerLoading(true)
    //mock sendSecretAnswerQuery
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    const specificAnswer = 'pingu'
    const commonAnswer = 'rex'
    let mockedResponse = ''
    if (value === specificAnswer) {
      mockedResponse = 'user found'
    }
    if (value === commonAnswer) {
      mockedResponse = 'valid information'
    }
    wait(2000)
      .then(res => {
        setConfirmingSecretAnswerLoading(false)
        if (mockedResponse === 'user found') {
          props.history.push(RECOVERY_SUCCESS_PATH)
          return
        }
        if (mockedResponse === 'valid information') {
          props.history.push(SELECT_SCHOOL_STATE_PATH)
          return
        }
        setAlertData({
          title: 'Não encontrado',
          message: 'Não encontramos nenhum usuário para essa resposta.',
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
        onClick={() => props.history.goBack()}
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
          text="Qual é o nome do seu primeiro animal de estimação?"
          size={3}
          sizeMobile={4}
          textAlignMobile={'center'}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'animal'}
          value={value}
          placeholder={'Sua resposta'}
          onChange={handleValueInput}
          label={'Primeiro animal de estimação'}
          style={{ marginBottom: 16 }}
        />
        <Button
          text="Avançar"
          onClick={sendSecretAnswer}
          loading={confirmingSecretAnswerLoading}
          isEnabled={enableButton}
        />
        <ContainerBulletsStyle>
          <Bullets active={2} />
        </ContainerBulletsStyle>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default SecretQuestionAnswer
