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
import { RECOVERY_SUCCESS_PATH, SELECT_SCHOOL_YEAR_PATH } from 'routes'
import Alert from 'components/lib/alerts/Alert'

const SchoolNameAnswer = props => {
  const [value, setValue] = useState('')
  const [enableButton, setEnableButton] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [
    confirmingSchoolNameLoading,
    setConfirmingSchoolNameLoading
  ] = useState('')

  const handleValueInput = evt => {
    if (evt.target.value.length > 0) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
    setValue(evt.target.value)
  }

  const sendSchoolName = () => {
    if (!enableButton) {
      return
    }
    setConfirmingSchoolNameLoading(true)
    //mock sendSchoolNameQuery
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(2000)
      .then(res => {
        const mockedResponse = 'valid information'
        setConfirmingSchoolNameLoading(false)
        if (mockedResponse === 'user found') {
          props.history.push(RECOVERY_SUCCESS_PATH)
          return
        }
        if (mockedResponse === 'valid information') {
          props.history.push(SELECT_SCHOOL_YEAR_PATH)
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
      <ContainerTitle>
        <ContainerBackgroundStyle />
        <Title
          text="What is the name of your school?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{ maxWidth: 320 }}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'schoolNameAnswer'}
          value={value}
          placeholder={'Your school\'s name'}
          onChange={handleValueInput}
          label={'O nome da sua escola'}
          style={{ marginBottom: 16 }}
        />
        <Button
          text="Submit"
          onClick={sendSchoolName}
          loading={confirmingSchoolNameLoading}
          isEnabled={enableButton}
        />
        <ContainerBulletsStyle>
          <Bullets active={4} />
        </ContainerBulletsStyle>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default SchoolNameAnswer
