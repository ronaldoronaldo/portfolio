import React from 'react'
import {
  BadgeContainer, BadgeIcon, BadgeIconContainer, BadgeImage, BadgeTitle, BadgeTitleBox,
} from './Badge.style'
import badgeImage from 'assets/images/portfolio/badges/ribbon.png'

const Badge = ({ title, image, iconWidth }) => {
  return (
    <BadgeContainer>
      <BadgeImage src={badgeImage}/>
      <BadgeIconContainer iconWidth={iconWidth}>
        <BadgeIcon src={image}/>
      </BadgeIconContainer>
      <BadgeTitleBox>
        <BadgeTitle>
          {title}
        </BadgeTitle>
      </BadgeTitleBox>
    </BadgeContainer>
  )
}

export default Badge





