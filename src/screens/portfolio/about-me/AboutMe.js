import React, {useEffect, useState} from 'react'
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
  const [animate, setAnimate] = useState(false)
  const [animate2, setAnimate2] = useState(false)

  const randomLoop = () => {
    console.log('oi')
    const rand = Math.round(Math.random() * (3000 - 500)) + 500
    setTimeout(function () {
      triggerAnimation()
      randomLoop()
    }, rand)
  }


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
      {renderBadges()}
    </AboutMeContainer>
  )
}

export default AboutMe
