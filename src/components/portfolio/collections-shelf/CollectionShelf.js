import React from 'react'
import PropTyes from 'prop-types'
import Collection from './collection/Collection'
import Shelf from './Shelf'
import { sizes } from 'config/ui'

const CollectionShelf = ({ onClickCollection, title, data, loading, ...rest }) => {
  return (
    <Shelf
      title={title}
      {...rest}
      carouselSettings={{
        variableWidth: false,
        slidesToShow: 2.8,
        slidesToScroll: 2.8,
        responsive: [
          {
            breakpoint: sizes.xlScreen,
            settings: {
              slidesToShow: 5.8,
              slidesToScroll: 5
            }
          },
          {
            breakpoint: sizes.lScreen,
            settings: {
              slidesToShow: 4.6,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: sizes.mScreen,
            settings: {
              slidesToShow: 3.2,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: sizes.xsScreen,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 2
            }
          }
        ]
      }}
      paddingRight={10}
    >
      {data.map((collection, index) => {
        return (
          <Collection
            key={index}
            collection={collection}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: 'inherit',
              marginBottom: 0
            }}
            loading={loading}
            onClickCollection={onClickCollection}
          />
        )
      })}
    </Shelf>
  )
}

CollectionShelf.propTyes = {
  title: PropTyes.string,
  data: PropTyes.array.isRequired,
  onClickCollection: PropTyes.func,
  loading: PropTyes.bool
}

CollectionShelf.defaultProps = {
  data: [],
  loading: true,
}

export default CollectionShelf
