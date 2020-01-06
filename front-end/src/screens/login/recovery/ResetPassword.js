import React, { useState, useEffect } from 'react'
import {
  RecoveryContainerStyle,
  ContainerStyle,
  ContainerTitle,
  AlertStyle
} from './ResetPassword.style'
import { BackButton } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import { Button } from 'components/lib/buttons'
import { Input } from 'components/lib/inputs'
import { colors } from 'config/ui'
import getQueryStringValue from 'utils/getQueryStringValue'
import { withApollo } from 'react-apollo'
import { ROOT_PATH } from 'routes'

import { validationTokenAccountRecoveryQuery } from 'api/queries'
import { updatePasswordRecoveryMutation } from 'api/mutations'

const PASSWORD_UPDATED_SUCCESSFULLY = 'Password updated successfully!'
const PASSWORD_UPDATED_ERROR = 'Error updating password!'

const SchoolNameAnswer = ({ client, ...props }) => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [enableButton, setEnableButton] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [dataRecovery, setDataRecovery] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const token = getQueryStringValue('token')
    const email = getQueryStringValue('email')

    client
      .query({
        query: validationTokenAccountRecoveryQuery,
        variables: {
          email,
          token
        }
      })
      .then(res => {
        const { validationTokenAccountRecovery } = res.data
        setDataRecovery(validationTokenAccountRecovery[0])
      })
      .catch(err => {
        console.log(err)
      })

    if (newPassword.length >= 6 && confirmNewPassword.length >= 6) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
  }, [newPassword, confirmNewPassword])

  const handleResetPassword = state => evt => {
    state(evt.target.value)
  }

  const handleSaveNewPassword = () => {
    if (newPassword.length < 6 || confirmNewPassword.length < 6) return null

    setIsLoading(true)

    if (newPassword !== confirmNewPassword) {
      setAlertData({
        title: 'Ops!',
        message: 'As senhas precisam ser iguais nos dois campos.',
        textButton: 'Entendi'
      })

      setIsLoading(false)
    } else {
      if (dataRecovery && Object.keys(dataRecovery).length) {
        const { id } = dataRecovery
        const token = getQueryStringValue('token')
        setIsLoading(true)

        client
          .mutate({
            mutation: updatePasswordRecoveryMutation,
            variables: {
              userId: id,
              password: newPassword,
              token
            }
          })
          .then(res => {
            const { updatePasswordRecovery } = res.data

            if (updatePasswordRecovery === PASSWORD_UPDATED_SUCCESSFULLY) {
              setAlertData({
                title: 'Sucesso!',
                message: 'Sua senha foi alterada com sucesso.',
                textButton: 'Entendi',
                onClick: () => props.history.push(ROOT_PATH)
              })

              setNewPassword('')
              setConfirmNewPassword('')
            }

            setIsLoading(false)
          })
          .catch(err => {
            if (err.graphQLErrors) {
              const passwordUpdatedError = err.graphQLErrors.find(
                graphqlError => graphqlError.message === PASSWORD_UPDATED_ERROR
              )

              if (passwordUpdatedError) {
                setAlertData({
                  title: 'Ops',
                  message:
                    'A senha informada precisa ter ao menos 6 caracteres e uma letra maiúscula.',
                  textButton: 'Entendi'
                })
              }

              setIsLoading(false)
            }
            console.log(err)
          })
      }
    }
  }

  return (
    <ContainerStyle>
      {alertData && (
        <AlertStyle
          title={alertData.title}
          message={alertData.message}
          textButton={alertData.textButton}
          onClick={
            alertData.onClick ? alertData.onClick : () => setAlertData(null)
          }
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
        <Title
          text="Por favor, cadastre sua
          nova senha!"
          size={3}
          sizeMobile={4}
          textAlignMobile="center"
          style={{ maxWidth: 350, marginBottom: 23 }}
        />
      </ContainerTitle>
      <RecoveryContainerStyle>
        <Input
          id={'resetPassword'}
          value={newPassword}
          placeholder={'Nova senha'}
          onChange={handleResetPassword(setNewPassword)}
          label={'Nova Senha'}
          style={{ marginBottom: 33 }}
          type="password"
        />
        <Input
          id={'confirmPassword'}
          value={confirmNewPassword}
          placeholder={'Confirmar senha'}
          onChange={handleResetPassword(setConfirmNewPassword)}
          label={'Confirmar senha'}
          style={{ marginBottom: 33 }}
          type="password"
        />
        <Button
          text="Avançar"
          onClick={handleSaveNewPassword}
          loading={isLoading}
          isEnabled={enableButton}
          style={{ marginBottom: 16 }}
        />
        <Button
          text="Já lembrei minha senha"
          size="small"
          color={colors.black4}
          bgColor={colors.white}
          bgColorHover={'none'}
          textColorHover={colors.black4Dark}
          onClick={() => props.history.push(ROOT_PATH)}
        />
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default withApollo(SchoolNameAnswer)
