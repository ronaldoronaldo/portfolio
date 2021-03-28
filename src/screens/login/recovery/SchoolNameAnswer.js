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
import { SELECT_SCHOOL_YEAR_PATH } from 'routes'

const SchoolNameAnswer = props => {
  const [value, setValue] = useState('')
  const [enableButton, setEnableButton] = useState(false)
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

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      sendSchoolName()
    }
  }

  const sendSchoolName = () => {
    if (!enableButton) {
      return
    }
    setConfirmingSchoolNameLoading(true)
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
    wait(2000)
      .then(res => {
        setConfirmingSchoolNameLoading(false)
        props.history.push(SELECT_SCHOOL_YEAR_PATH)

      })
      .catch(() => {})
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
          onKeyUp={handleKeyUp}
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
