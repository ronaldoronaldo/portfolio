import React from 'react'
import { BackButton } from 'components/lib/buttons'
import {
  ContainerStyle,
  ContainerBackButton,
  StudentImageContainer,
  TeacherImageContainer,
  OptionsWrapper,
  OptionContainer,
  ChooseUserTypeButton
} from './ChooseUserType.style'
import { colors } from 'config/ui'
import { CHOOSE_RECOVER_METHOD_PATH } from 'routes'

const ChooseUserType = props => {
  const goForward = isTeacher => {
    console.log(isTeacher)
    props.history.push(CHOOSE_RECOVER_METHOD_PATH)
  }

  const goBack = () => {
    props.history.goBack()
  }

  return (
    <ContainerStyle>
      <ContainerBackButton>
        <BackButton
          onClick={goBack}
          style={{
            marginTop: 32,
            marginLeft: 32,
            position: 'absolute',
            left: 0,
            top: -15
          }}
        />
      </ContainerBackButton>
      <OptionsWrapper>
        <OptionContainer>
          <StudentImageContainer />
          <ChooseUserTypeButton
            text={'I\'m a student'}
            onClick={goForward}
            bgColor={colors.purple3}
            bgColorHover={colors.purple3Light}
          />
        </OptionContainer>
        <OptionContainer>
          <TeacherImageContainer />
          <ChooseUserTypeButton
            text={'I\'m a teacher'}
            onClick={goForward}
            bgColor={colors.orange3}
            bgColorHover={colors.orange3Light}
          />
        </OptionContainer>
      </OptionsWrapper>
    </ContainerStyle>
  )
}

export default ChooseUserType
