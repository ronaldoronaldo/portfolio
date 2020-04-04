import React from 'react'
import {
  BadgeContainer, BadgeIcon, BadgeImage, BadgeTitle, BadgeTitleBox,
} from './Badge.style'
import badgeImage from 'assets/images/portfolio/badges/ribbon.png'

const Badge = ({ title, image }) => {
  return (
    <BadgeContainer>
      <BadgeImage src={badgeImage}/>
      <BadgeIcon src={image}/>
      <BadgeTitleBox>
        <BadgeTitle>
          {title}
        </BadgeTitle>
      </BadgeTitleBox>
    </BadgeContainer>
  )
}

export default Badge





