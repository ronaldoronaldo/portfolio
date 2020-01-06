import React from 'react'
import { Button } from 'components/lib/buttons'
import { Title } from 'components/lib/titles'
import { colors } from 'config/ui'
import BorderOr from 'components/lib/borderOr'
import { ContainerStyle, ImgIconStyle } from './RecoveryError.style'
import { FORGOT_LOGIN_PATH } from 'routes'

const RecoveryError = props => {
  return (
    <ContainerStyle>
      <ImgIconStyle />
      <Title
        text="Infelizmente não conseguimos recuperar seu acesso"
        size={5}
        sizeMobile={5}
        textAlignMobile="center"
        style={{ marginBottom: 32 }}
      />
      <Button
        text="Tentar Novamente"
        onClick={() => props.history.push(FORGOT_LOGIN_PATH)}
      />
      <BorderOr style={{ marginTop: 8, marginBottom: 8 }} />
      <Button
        text="Fale conosco via e-mail"
        bgColor={colors.white}
        bgColorHover={colors.white}
        color={colors.black5}
        textColorHover={colors.black5Light}
        border={`.5px solid ${colors.black3};`}
        onClick={() => console.log('Ok')}
        style={{ marginBottom: 16 }}
      />
      <Button
        text="Fale conosco via whatsapp"
        bgColor={colors.white}
        bgColorHover={colors.white}
        color={colors.black5}
        textColorHover={colors.black5Light}
        border={`.5px solid ${colors.black3};`}
        onClick={() => console.log('Ok')}
      />
    </ContainerStyle>
  )
}

export default RecoveryError
