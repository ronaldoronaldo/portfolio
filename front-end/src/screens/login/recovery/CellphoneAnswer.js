import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerBulletsStyle,
  ContainerStyle,
  ContainerTitle,
  ContainerBackgroundStyle
} from './CellphoneAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import Bullets from 'components/lib/bullets'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import { spacing } from 'config/ui'
import { RECOVER_VIA_CELLPHONE_CONFIRMATION_PATH } from 'routes'
import Alert from 'components/lib/alerts/Alert'

const CellphoneAnswer = props => {
  const [value, setValue] = useState('')
  const [sendCellphoneLoading, setSendCellphoneLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [enableButton, setEnableButton] = useState(false)

  const sendCellphoneConfirmation = () => {
    setSendCellphoneLoading(true)
    //mock sendCellphoneQuery
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(3000)
      .then(res => {
        const mockedResponse = 'cellphone found'
        setSendCellphoneLoading(false)
        if (mockedResponse === 'cellphone found') {
          props.history.push(RECOVER_VIA_CELLPHONE_CONFIRMATION_PATH)
          return
        }
        if (mockedResponse === 'cellphone not found') {
          setAlertData({
            title: 'Não encontrado',
            message: 'Não encontramos nenhum usuário para esse Celular.',
            textButton: 'fechar'
          })
        }
      })
      .catch(() => console.log('error'))
  }

  const handleValueInput = evt => {
    if (evt.target.value.length > 0) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
    setValue(evt.target.value)
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
          text="Qual é o seu celular vinculado?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{ maxWidth: 340 }}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'cellphoneAnswer'}
          value={value}
          placeholder={'Celular vinculado'}
          onChange={handleValueInput}
          label={'Celular'}
          style={{ marginBottom: spacing.spacingSmall }}
        />
        <Button
          text="Avançar"
          isEnabled={enableButton}
          onClick={() => sendCellphoneConfirmation()}
          loading={sendCellphoneLoading}
        />
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default CellphoneAnswer
