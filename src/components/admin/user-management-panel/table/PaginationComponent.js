import React from 'react'
import { PaginationComponentStyle, IconButtonStyle } from './Table.style'

const PaginationComponent = ({
  canPreviousPage,
  pageCount,
  canNextPage,
  nextPage,
  previousPage,
  setPageSize,
  pageSize,
  data,
  disablePageSizeOptions,
  borderColor,
  ...rest
}) => {
  return (
    <PaginationComponentStyle className="pagination" {...rest}>
      <div>
        <span>
          1 - {pageSize}
          {!disablePageSizeOptions && (
            <div>
              <span onClick={() => setPageSize(10)}>10 itens</span>
              <span onClick={() => setPageSize(20)}>20 itens</span>
              <span onClick={() => setPageSize(50)}>50 itens</span>
              <span onClick={() => setPageSize(100)}>100 itens</span>
            </div>
          )}
        </span>{' '}
        de {data.length}
      </div>
      {pageCount > 1 && (
        <>
          <IconButtonStyle
            iconName="caret-left"
            iconSize={14}
            style={{
              marginRight: 8,
              marginLeft: 16,
              opacity: canPreviousPage ? 1 : 0.2,
              cursor: canPreviousPage ? 'pointer' : 'not-allowed'
            }}
            onClick={previousPage}
            disabled={!canPreviousPage}
            borderColor={borderColor}
          />
          <IconButtonStyle
            iconName="caret-right"
            iconSize={14}
            onClick={nextPage}
            disabled={!canNextPage}
            borderColor={borderColor}
            style={{
              opacity: canNextPage ? 1 : 0.2,
              cursor: canNextPage ? 'pointer' : 'not-allowed'
            }}
          />
        </>
      )}
    </PaginationComponentStyle>
  )
}

export default PaginationComponent
