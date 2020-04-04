import React from 'react'
import {AboutMeContainer} from "./AboutMe.style"
import {GlassFrame} from 'components/portfolio/glass-frame'
import reactHooks from 'assets/images/portfolio/badges/reactHooks.svg'
import Badge from 'components/portfolio/badge/Badge'

const badges = [
  {
    title: 'React Hooks',
    image: reactHooks
  }
]

const AboutMe = () => {

  const renderBadges = () => {
    return badges.map(badge => {
      return (
        <GlassFrame>
          <Badge {...badge}/>
        </GlassFrame>
      )
    })
  }

  return (
    <AboutMeContainer>
      {renderBadges()}
    </AboutMeContainer>
  )
}

export default AboutMe
