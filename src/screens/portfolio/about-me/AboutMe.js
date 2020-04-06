import React, {useEffect, useState} from 'react'
import {
  AboutMeContainer,
  BadgesContainer,
  Box1, Box2,
  CertificateImage,
  Photos,
  PulseImage,
  SectionSubtitle, SectionTitle
} from "./AboutMe.style"
import {GlassFrame} from 'components/portfolio/glass-frame'
import Badge from 'components/portfolio/badge/Badge'

import reactHooks from 'assets/images/portfolio/badges/reactHooks.svg'
import graphql from 'assets/images/portfolio/badges/graphql.svg'
// import jest from 'assets/images/portfolio/badges/jest.svg'
import mobileFirst from 'assets/images/portfolio/badges/mobileFirst.svg'
import uxui from 'assets/images/portfolio/badges/uxui.svg'
import chart3 from 'assets/images/portfolio/badges/chart3.svg'
import maps from 'assets/images/portfolio/badges/maps.svg'
// import rRouter from 'assets/images/portfolio/badges/reactRouter.svg'
import enzyme from 'assets/images/portfolio/badges/test1.svg'
// import testdriven from 'assets/images/portfolio/badges/teste2.svg'
// import linuxXP from 'assets/images/portfolio/badges/code1.svg'
// import SRRCode from 'assets/images/portfolio/badges/code2.svg'
import responsive from 'assets/images/portfolio/badges/responsive2.svg'
import certificate from 'assets/images/portfolio/badges/jestEnzymeCertificate.jpg'
import magro from 'assets/images/portfolio/magro4.jpg'
import pulse from 'assets/images/portfolio/pulse1.jpg'

const badges = [
  {
    title: 'Mobile First',
    image: mobileFirst,
    iconWidth: 84
  },
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
  // {
  //   title: 'Jest',
  //   image: jest,
  //   iconWidth: 74
  // },
  {
    title: 'UX / UI',
    image: uxui,
    iconWidth: 76
  },
  {
    title: 'Charts',
    image: chart3,
    iconWidth: 76
  },
  {
    title: 'Maps',
    image: maps,
    iconWidth: 76
  },
  // {
  //   title: 'React Router',
  //   image: rRouter,
  //   iconWidth: 76
  // },
  // {
  //   title: 'Enzyme',
  //   image: enzyme,
  //   iconWidth: 76
  // },
  {
    title: 'Test Driven',
    image: enzyme,
    iconWidth: 76
  },
  // {
  //   title: 'SRR Code',
  //   image: SRRCode,
  //   iconWidth: 76
  // },
  {
    title: 'Responsive',
    image: responsive,
    iconWidth: 76
  },
  // {
  //   title: 'Linux OS',
  //   image: linuxXP,
  //   iconWidth: 76
  // }
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
    const interval = setInterval(triggerAnimation, 6400)
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
      <SectionTitle>Coding Badges</SectionTitle>
      <SectionSubtitle>
        Some important topics about my code. Always simple, reusable, readable and optimized as every code should be.
      </SectionSubtitle>
      <BadgesContainer>
        {renderBadges()}
      </BadgesContainer>
      <SectionTitle style={{
        marginTop: 56
      }}>About Me</SectionTitle>
      <SectionSubtitle>
        Some important topics about my code. Always simple, reusable, readable and optimized as every code should be.
      </SectionSubtitle>
      <Photos>
        <Box1>
          <GlassFrame>
            <CertificateImage src={certificate}/>
          </GlassFrame>
        </Box1>
        <Box2>
          <GlassFrame style={{minWidth: '48%'}}>
            <PulseImage src={magro}/>
          </GlassFrame>
          <GlassFrame>
            <PulseImage src={pulse}/>
          </GlassFrame>
        </Box2>
      </Photos>
    </AboutMeContainer>
  )
}

export default AboutMe
