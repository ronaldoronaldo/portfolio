import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerStyle,
  ContainerTitle,
  ContainerBackgroundStyle,
  DoNotHaveEmailText
} from './EmailAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import { spacing } from 'config/ui'
import { RECOVER_VIA_EMAIL_CONFIRMATION_PATH } from 'routes'
import { withApollo } from 'react-apollo'
import { Alert } from 'components/lib/alerts'
import { FontIcon } from 'components/lib/icons'
import { colors } from 'config/ui'



import { checkEmailIsValid } from 'utils/validations'

const EMAIL_SUCCESSFULLY_SENT = 'Recover password email sent successfully'

const EmailAnswer = ({ client, ...props }) => {
  const [value, setValue] = useState('')
  const [sendEmailLoading, setSendEmailLoading] = useState(false)
  const [enableButton, setEnableButton] = useState(false)
  const [alertData, setAlertData] = useState(null)

  const sendEmailConfirmation = () => {
    if (value.length <= 0) return null

    setSendEmailLoading(true)

    if (!checkEmailIsValid(value)) {
      setAlertData({
        title: 'Ops... somthing went wrong',
        message: 'This is not a valid e-mail.',
        textButton: 'Try again'
      })

      setSendEmailLoading(false)
      return null
    }

    setTimeout(() => {
      props.history.push({
        pathname: RECOVER_VIA_EMAIL_CONFIRMATION_PATH,
        state: { email: value }
      })
      setSendEmailLoading(false)
    }, 1000)
  }

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
      sendEmailConfirmation()
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
      <ContainerBackgroundStyle>
        <FontIcon iconName='mail' sizeMobile={48} color={colors.black2} />
      </ContainerBackgroundStyle>
      <ContainerTitle>
        <Title
          text="What is your account's e-mail?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{ maxWidth: 300 }}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'emailAnswer'}
          value={value}
          placeholder={'Your e-mail'}
          onChange={handleValueInput}
          onKeyUp={handleKeyUp}
          label={'Your e-mail'}
          style={{ marginBottom: spacing.small }}
        />
        <Button
          text="Submit"
          isEnabled={enableButton}
          onClick={sendEmailConfirmation}
          loading={sendEmailLoading}
        />
        <DoNotHaveEmailText>
          Do not have an account e-mail? <a href="/app/login">Click here</a>
        </DoNotHaveEmailText>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default withApollo(EmailAnswer)
