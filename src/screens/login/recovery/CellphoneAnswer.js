import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerStyle,
  ContainerTitle,
} from './CellphoneAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import {colors, spacing} from 'config/ui'
import { RECOVER_VIA_CELLPHONE_CONFIRMATION_PATH } from 'routes'
import {ContainerLeftStyle} from "./VerifyCellphone.style"
import {FontIcon} from "../../../components/lib/icons"

const CellphoneAnswer = props => {
  const [value, setValue] = useState('')
  const [sendCellphoneLoading, setSendCellphoneLoading] = useState(false)
  const [enableButton, setEnableButton] = useState(false)

  const sendCellphoneConfirmation = () => {
    setSendCellphoneLoading(true)
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(3000)
      .then(res => {
          setSendCellphoneLoading(false)
          props.history.push(RECOVER_VIA_CELLPHONE_CONFIRMATION_PATH)
        }
      ).catch(() => {})
  }

  const handleValueInput = evt => {
    if (evt.target.value.length > 0) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
    setValue(evt.target.value)
  }

  const onKeyUp = e => {
    if (e.key === 'Enter') {
      sendCellphoneConfirmation()
    }
  }

  return (
    <ContainerStyle>
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
        <ContainerLeftStyle>
          <FontIcon
            iconName="cellphone"
            size={180}
            sizeMobile={130}
            color={colors.black2}
          />
        </ContainerLeftStyle>
      <ContainerTitle>
        <Title
          text="What is your account's cellphone number?"
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
          placeholder={'Cellphone'}
          onKeyUp={onKeyUp}
          onChange={handleValueInput}
          label={'Cellphone'}
          style={{ marginBottom: spacing.small }}
        />
        <Button
          text="Submit"
          isEnabled={enableButton}
          onClick={() => sendCellphoneConfirmation()}
          loading={sendCellphoneLoading}
        />
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default CellphoneAnswer
