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
import { SELECT_SCHOOL_STATE_PATH } from 'routes'
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
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(2000)
      .then(res => {
        setConfirmingSecretAnswerLoading(false)
        props.history.push(SELECT_SCHOOL_STATE_PATH)
      })
      .catch(() => {})
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
          text="What is the name of your first pet?"
          size={3}
          sizeMobile={4}
          textAlignMobile={'center'}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'animal'}
          value={value}
          placeholder={'Your answer'}
          onChange={handleValueInput}
          label={'Primeiro animal de estimação'}
          style={{ marginBottom: 16 }}
        />
        <Button
          text="Submit"
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
