import React, {useEffect, useState} from 'react'
import {AboutMeContainer, BadgesContainer} from "./AboutMe.style"
import {GlassFrame} from 'components/portfolio/glass-frame'
import Badge from 'components/portfolio/badge/Badge'

import reactHooks from 'assets/images/portfolio/badges/reactHooks.svg'
import graphql from 'assets/images/portfolio/badges/graphql.svg'
import jest from 'assets/images/portfolio/badges/jest.svg'
import mobileFirst from 'assets/images/portfolio/badges/mobileFirst.svg'

const badges = [
  {
    title: 'React Hooks',
    image: reactHooks,
    iconWidth: 90
  },
  {
    title: 'GraphQL',
    image: graphql,
    iconWidth: 76
  },
  {
    title: 'Jest',
    image: jest,
    iconWidth: 74
  },
  {
    title: 'Mobile First',
    image: mobileFirst,
    iconWidth: 84
  }
]

const AboutMe = () => {
  const [animate, setAnimate] = useState(false)
  const [animate2, setAnimate2] = useState(false)

  // const randomLoop = () => {
  //   console.log('oi')
  //   const rand = Math.round(Math.random() * (3000 - 500)) + 500
  //   setTimeout(function () {
  //     triggerAnimation()
  //     randomLoop()
  //   }, rand)
  // }


  const triggerAnimation = () => {
      setAnimate(true)
    setTimeout(() => {
      setAnimate2(true)
    }, 300)
    setTimeout(() => {
      setAnimate(false)
      setAnimate2(false)
    }, 1500)
  }

  useEffect(() => {
    const interval = setInterval(triggerAnimation, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const renderBadges = () => {
    return badges.map(badge => {
      return (
        <GlassFrame animate={animate} animate2={animate2}>
          <Badge {...badge}/>
        </GlassFrame>
      )
    })
  }

  return (
    <AboutMeContainer>
      <BadgesContainer>
        {renderBadges()}
      </BadgesContainer>
    </AboutMeContainer>
  )
}

export default AboutMe
