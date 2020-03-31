import React from 'react'
import { Title } from 'components/lib/titles'
import NextButton from 'components/lib/buttons/next-button/NextButton'
import { BackButton } from 'components/lib/buttons'
import { spacing } from 'config/ui'
import {
  ContainerStyle,
  ContainerBulletsStyle,
  NextButtonWrapper,
  TitleContainerStyle
} from 'screens/login/recovery/SelectSecretQuestion.style'
import Bullets from 'components/lib/bullets'
import { SECRET_QUESTION_ANSWER_PATH } from 'routes'

const SelectSecretQuestion = props => {
  const goForward = () => {
    props.history.push(SECRET_QUESTION_ANSWER_PATH)
  }

  const goBack = () => {
    props.history.goBack()
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
        <Title
          text="Which one is your secret question?"
          size={3}
          sizeMobile={4}
          textAlign="center"
        />
      </TitleContainerStyle>
      <NextButtonWrapper marginBottom={spacing.large}>
        <NextButton
          text="What is the name of your first pet?"
          textAlign={'left'}
          onClick={goForward}
        />
        <NextButton
          text="Which food do you like the most?"
          textAlign="left"
          onClick={goForward}
        />
        <NextButton
          text="What is the name of your best friend?"
          textAlign="left"
          onClick={goForward}
        />
        <NextButton
          text="what is your favorite fruit?"
          textAlign="left"
          onClick={goForward}
          lastButton
        />
      </NextButtonWrapper>
      <ContainerBulletsStyle>
        <Bullets active={1} />
      </ContainerBulletsStyle>
    </ContainerStyle>
  )
}

export default SelectSecretQuestion
