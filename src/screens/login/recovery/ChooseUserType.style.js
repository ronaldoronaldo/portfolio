import styled, { css } from 'styled-components'
import backgroundStudent from 'assets/images/student-recover-pass.png'
import backgroundTeacher from 'assets/images/teacher-recover-pass.png'
import { spacing, colors, sizes } from 'config/ui'
import Button from 'components/lib/buttons/Button'

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: ${sizes.padding * 2}px 16px;
`

export const ContainerBackButton = styled.div`
  display: none;
  @media (min-width: ${sizes.lgScreen}px) {
    display: block;
  }
`

export const StudentImageContainer = styled.div`
  width: 288px;
  height: 247px;
  max-width: 100%;
  background-image: url(${backgroundStudent});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 10px;
  @media (min-width: ${sizes.lgScreen}px) {
    width: 384px;
    height: 328px;
  }
`

export const TeacherImageContainer = styled(StudentImageContainer)`
  background-image: url(${backgroundTeacher});
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  @media (min-width: ${sizes.mdScreen}px) {
    flex-direction: row;
  }
`

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (min-width: ${sizes.mdScreen}px) {
    margin-right: ${spacing.spacingMedium}px;
    &:last-child {
      margin-right: 0px;
    }
  }
`

export const ChooseUserTypeButton = styled(Button)`
  ${({ bgColor }) => css`
    position: relative;
    top: -25px;
    background-color: ${bgColor ? bgColor : colors.primary};
    height: 48px;
    border-radius: 10px;
    width: 80%;
  `}
`
