import React from 'react'
import { StyledProjects, Cover } from './ProjectsItem.style'
import PropTypes from 'prop-types'
import { CollectionPlaceholder } from 'components/lib/loaders'

const ProjectsItem = ({ project, onClickCover, loading, ...rest }) => {
  if (loading) {
    return <CollectionPlaceholder />
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
  onClickCover: PropTypes.func,
  loading: PropTypes.bool
}

export default ProjectsItem
