import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyledCollection,
  Cover,
  CollectionNameBox,
  CollectionName, OpacityMask
} from './Collection.styles'

export class Collection extends Component {
  static propTypes = {
    collection: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired,
  }

  static defaultProps = {
    collection: {
      name: '',
      image: ''
    }
  }

  handleCollectionClick = () => {
    console.log('collection clicked')
  }

  render() {
    const { collection, loading, ...rest } = this.props

    return (
      <StyledCollection {...rest}>
        <Cover
          onClick={() => this.handleCollectionClick()}
        >
          <OpacityMask/>
          <img src={'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/arvore-library-assets/arvore_colecoes_banner_' + collection.image + '.png'} alt={name} />
          <CollectionNameBox>
            <CollectionName>{collection.name}</CollectionName>
          </CollectionNameBox>
        </Cover>
      </StyledCollection>
    )
  }
}

export default Collection
