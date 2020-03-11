import React from 'react'
import {CurriculumContainer, LeftSide, RightSide, Role, StyledImage, Title} from './Curriculum.style'
import lamp from 'assets/images/portfolio/lamp.png'


const Curriculum = () => {
  return (
    <CurriculumContainer>
      <LeftSide>
        <StyledImage src={lamp}/>
        <Title>Rafael Weiss</Title>
        <Role>Front-end Developer</Role>
        <Role>UX UI Designer</Role>
      </LeftSide>
      <RightSide>

      </RightSide>
    </CurriculumContainer>
  )
}

export default Curriculum
