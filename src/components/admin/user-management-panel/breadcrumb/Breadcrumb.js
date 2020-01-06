import React from 'react'
import { colors } from 'config/ui'

import { PathsContainer, LastPath, PathLink } from './Breadcrumb.style'

const Breadcrumb = ({ paths }) => {
  return (
    <PathsContainer>
      {paths.map((path, index) => {
        if (index === paths.length - 1) {
          return <LastPath key={index}>{path.name}</LastPath>
        }
        return (
          <React.Fragment key={index}>
            <PathLink to={path.path}>{path.name}</PathLink>
            <span
              style={{
                marginLeft: 9,
                marginRight: 9,
                color: colors.black3
              }}
            >
              >
            </span>
          </React.Fragment>
        )
      })}
    </PathsContainer>
  )
}

export default Breadcrumb
