import React, { useState } from 'react'
import { Title } from 'components/lib/titles'
import { BackButton } from 'components/lib/buttons'
import NextButton from 'components/lib/buttons/next-button/NextButton'
import { colors } from 'config/ui'
import {
  SELECT_SECRET_QUESTION_PATH,
  RECOVER_VIA_EMAIL_PATH,
  RECOVER_VIA_CELLPHONE_PATH
} from 'routes'
import {
  ContainerStyle,
  RecoveryContainerStyle,
  NextButtonWrapper,
  TitleContainerStyle
} from './ForgotLogin.style'

const RecoverPassword = props => {
  const [isTeacher] = useState(false)

  const goBack = () => {
    props.history.goBack()
  }

  const goToEmailRecoveryMethod = () => {
    props.history.push(RECOVER_VIA_EMAIL_PATH)
  }

  const goToCellphoneRecoveryMethod = () => {
    props.history.push(RECOVER_VIA_CELLPHONE_PATH)
  }

  const goToQuestions = () => {
    props.history.push(SELECT_SECRET_QUESTION_PATH)
  }

  return (
    <ContainerStyle>
      <BackButton
        onClick={goBack}
        style={{
          marginTop: 32,
          marginLeft: 16,
          position: 'absolute',
          left: 0,
          top: -15
        }}
      />
      <TitleContainerStyle>
        <Title text="How would you like to recover your account?" size={3} sizeMobile={4} />
      </TitleContainerStyle>
      <RecoveryContainerStyle>
        <NextButtonWrapper>
          {!isTeacher && (
            <NextButton
              text="By answering some questions"
              textAlign="left"
              onClick={goToQuestions}
              color={colors.white}
              bgColor={colors.primary}
              firstButton
              style={{ width: '100%' }}
            />
          )}
          <NextButton
            text="With my e-mail"
            textAlign={'left'}
            onClick={goToEmailRecoveryMethod}
            style={{ width: '100%' }}
          />
          <NextButton
            text="With my cellphone"
            textAlign="left"
            onClick={goToCellphoneRecoveryMethod}
            lastButton
            style={{ width: '100%' }}
          />
        </NextButtonWrapper>
      </RecoveryContainerStyle>
    </ContainerStyle>
  )
}

export default RecoverPassword
