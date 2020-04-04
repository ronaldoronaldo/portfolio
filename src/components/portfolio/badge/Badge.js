import React from 'react'
import {
  BadgeContainer, BadgeImage, BadgeTitle, BadgeTitleBox,
} from './Badge.style'

const Badge = ({ title, image }) => {
  return (
    <BadgeContainer>
      <BadgeImage src={image}/>
      <BadgeTitleBox>
        <BadgeTitle>
          {title}
        </BadgeTitle>
      </BadgeTitleBox>
    </BadgeContainer>
  )
}

export default Badge





