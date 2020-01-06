import React, { useState, useEffect } from 'react'
import {
  PagedListContainter,
  PagedListItem,
  PagedItemLabel,
  PagedItemButton,
  PagedListContent,
  EmprtyMessageContainer,
  StyledLink
} from './PagedList.style'
import { colors } from 'config/ui'
import PaginationComponent from 'components/admin/user-management-panel/table/PaginationComponent'

const PagedList = ({ items, onItemClicked, emptyLabel }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [canPreviousPage, setCanPreviousPage] = useState(false)
  const [canNextPage, setCanNextPage] = useState(true)
  const [pages, setPages] = useState([items])

  useEffect(() => {
    const newPages = chunk(items, 5)
    setPages(newPages)
    checkIfFirstOrLastPage(currentPage)
  }, [items, pages.length])

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    )

  const checkIfFirstOrLastPage = newCurrentPage => {
    if (newCurrentPage >= pages.length - 1) {
      setCanNextPage(false)
    } else {
      setCanNextPage(true)
    }
    if (newCurrentPage <= 0) {
      setCanPreviousPage(false)
    } else {
      setCanPreviousPage(true)
    }
  }

  const nextPage = () => {
    const newCounter = currentPage + 1
    setCurrentPage(newCounter)
    checkIfFirstOrLastPage(newCounter)
  }

  const previousPage = () => {
    const newCounter = currentPage - 1
    setCurrentPage(newCounter)
    checkIfFirstOrLastPage(newCounter)
  }

  return (
    <PagedListContainter>
      <PagedListContent>
        {pages.length > 0 ? (
          pages[currentPage] &&
          pages[currentPage].map((item, index) => {
            return (
              <PagedListItem key={index}>
                <PagedItemLabel> {item} </PagedItemLabel>
                <PagedItemButton
                  onClick={() => onItemClicked(index)}
                  text="Vincular"
                  bgColor={colors.purple3}
                />
              </PagedListItem>
            )
          })
        ) : (
          <EmprtyMessageContainer>
            Todas as {emptyLabel} já estão vinculadas. Para editar basta acessar
            a página de {emptyLabel + ' '}{' '}
            <StyledLink>clicando aqui</StyledLink>
          </EmprtyMessageContainer>
        )}
      </PagedListContent>

      {pages.length > 0 && (
        <PaginationComponent
          borderColor={colors.black2}
          disablePageSizeOptions
          canPreviousPage={canPreviousPage} //bool
          canNextPage={canNextPage} //bool
          pageCount={pages.length}
          nextPage={nextPage}
          previousPage={previousPage}
          pageSize={5}
          data={items}
          style={{ marginTop: 8 }}
        />
      )}
    </PagedListContainter>
  )
}

PagedList.propTypes = {
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  // placeholder: PropTypes.string,
  // placeholderTextColor: PropTypes.string,
  // bgColor: PropTypes.string
}

export default PagedList
