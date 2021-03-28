import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerBulletsStyle,
  ContainerStyle,
  ContainerTitle,
  ContainerBackgroundStyle
} from './SchoolNameAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import Bullets from 'components/lib/bullets'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import { RECOVERY_SUCCESS_PATH, RECOVERY_ERROR_PATH } from 'routes'
import Alert from 'components/lib/alerts/Alert'

const UserFirstNameAnswer = props => {
  const [value, setValue] = useState('')
  const [enableButton, setEnableButton] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [
    confirmingUserFirstNameLoading,
    setConfirmingUserFirstNameLoading
  ] = useState('')

  const handleValueInput = evt => {
    if (evt.target.value.length > 0) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
    setValue(evt.target.value)
  }

  const sendUserFirstName = () => {
    if (!enableButton) {
      return
    }
    setConfirmingUserFirstNameLoading(true)
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(2000)
      .then(res => {
        setConfirmingUserFirstNameLoading(false)
        props.history.push(RECOVERY_SUCCESS_PATH)
      })
      .catch(() => {})
  }

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      sendUserFirstName()
    }
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
          text="What is your first name?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{maxWidth: 340}}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'firstNameAnswer'}
          value={value}
          placeholder={'Your first name'}
          onKeyUp={handleKeyUp}
          onChange={handleValueInput}
          label={'Your first name'}
          style={{ marginBottom: 16 }}
        />
        <Button
          text="Submit"
          onClick={sendUserFirstName}
          loading={confirmingUserFirstNameLoading}
          isEnabled={enableButton}
        />
        <ContainerBulletsStyle>
          <Bullets active={6} />
        </ContainerBulletsStyle>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default UserFirstNameAnswer
