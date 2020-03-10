import React, { useState } from 'react'
import {
  RecoveryContainerStyle,
  ContainerBulletsStyle,
  ContainerStyle,
  ContainerTitle,
  ContainerBackgroundStyle
} from './EmailAnswer.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import Bullets from 'components/lib/bullets'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import { spacing } from 'config/ui'
import { RECOVER_VIA_EMAIL_CONFIRMATION_PATH } from 'routes'
import { sendPasswordRecoveryEmailQuery } from 'api/queries'
import { withApollo } from 'react-apollo'
import { Alert } from 'components/lib/alerts'

import { checkEmailIsValid } from 'utils/validations'

const USER_NOT_FOUND = 'user not found'
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
        title: 'Ops',
        message: 'O email informado é inválido.',
        textButton: 'Entendi'
      })

      setSendEmailLoading(false)
      return null
    }

    client
      .query({
        query: sendPasswordRecoveryEmailQuery,
        variables: {
          email: value
        }
      })
      .then(res => {
        const { tokenAccountRecovery } = res.data

        if (tokenAccountRecovery === EMAIL_SUCCESSFULLY_SENT) {
          props.history.push({
            pathname: RECOVER_VIA_EMAIL_CONFIRMATION_PATH,
            state: { email: value }
          })
          setSendEmailLoading(false)
        }
      })
      .catch(err => {
        if (err.graphQLErrors) {
          const userNotFound = err.graphQLErrors.find(
            graphqlError => graphqlError.message === USER_NOT_FOUND
          )

          if (userNotFound) {
            setAlertData({
              title: 'Ops',
              message: 'Usuário não encontrado.',
              textButton: 'Entendi'
            })
          }
        }
        setSendEmailLoading(false)
      })
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
          text="Qual é o seu email de acesso?"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{maxWidth: 300}}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'emailAnswer'}
          value={value}
          placeholder={'Seu e-mail'}
          onChange={handleValueInput}
          label={'e-mail'}
          style={{ marginBottom: spacing.small }}
        />
        <Button
          text="Avançar"
          isEnabled={enableButton}
          onClick={sendEmailConfirmation}
          loading={sendEmailLoading}
        />
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default withApollo(EmailAnswer)
