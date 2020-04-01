import React from 'react'
import { StyledProjects, Cover } from './ProjectsItem.style'
import PropTypes from 'prop-types'
import { ProjectsPlaceholder } from 'components/lib/loaders'

const ProjectsItem = ({ project, loading, onClickCover, ...rest }) => {
  if (loading) {
    return <ProjectsPlaceholder />
  }

  return (
    <>
      <StyledProjects {...rest}>
        <Cover onClick={onClickCover}>
          <img src={project.image} alt={project.title} />
        </Cover>
      </StyledProjects>
    </>
  )
}

ProjectsItem.propTypes = {
  project: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

export default ProjectsItem
