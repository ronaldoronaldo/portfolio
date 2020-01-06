import React from 'react'
import PropTypes from 'prop-types'
import { StyledBook, Cover } from './Book.styles'
import { BookPlaceholder } from 'components/lib/loaders'

const Book = ({ book, loading, onClickCover, ...rest }) => {
  if (loading) {
    return <BookPlaceholder />
  }

  return (
    <>
      <StyledBook {...rest}>
        <Cover onClick={onClickCover}>
          {<img src={book.image} alt={book.name} />}
        </Cover>
      </StyledBook>
    </>
  )
}

Book.propTyes = {
  book: PropTypes.object.isRequired,
  onClickCover: PropTypes.func,
  loading: PropTypes.bool
}

export default Book
