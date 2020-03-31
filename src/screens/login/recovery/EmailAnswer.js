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
import { sendPasswordRecoveryEmailQuery } from 'api/queries'
import { withApollo } from 'react-apollo'
import { Alert } from 'components/lib/alerts'
import { FontIcon } from 'components/lib/icons'
import { colors } from 'config/ui'



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
        title: 'Ops... Algo deu errado',
        message: 'O e-mail informado é inválido.',
        textButton: 'Tente novamente'
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
              title: 'Ops... Algo deu errado',
              message: 'Esse e-mail não foi encontrado.',
              textButton: 'Tente novamente'
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

  const handleKeyUp = key => {
    if (key === 'Enter') {
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
          text="Qual o seu e-mail de acesso?"
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
          placeholder={'Seu e-mail'}
          onChange={handleValueInput}
          onKeyUp={handleKeyUp}
          label={'e-mail'}
          style={{ marginBottom: spacing.small }}
        />
        <Button
          text="Avançar"
          isEnabled={enableButton}
          onClick={sendEmailConfirmation}
          loading={sendEmailLoading}
        />
        <DoNotHaveEmailText>
          Não tem e-mail de acesso? <a href="http://faq.arvoredelivros.com.br/pt-BR/articles/1147272-esqueci-meu-codigo-de-acesso-ou-minha-senha-como-faco">Clique aqui</a>
        </DoNotHaveEmailText>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default withApollo(EmailAnswer)
