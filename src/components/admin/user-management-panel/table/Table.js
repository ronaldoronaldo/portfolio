import React, { useState } from 'react'
import { useTable, useRowSelect, usePagination, useSortBy } from 'react-table'
import PaginationComponent from './PaginationComponent'
import HeaderTable from './HeaderTable'
import ContainerActions from './ContainerActions'
import Checkbox from 'components/admin/user-management-panel/checkbox'

import { USER_MANAGEMENT_ROOT_PATH } from 'routes'

import {
  TableStyle,
  TableHeadStyle,
  TableRowStyle,
  TableBodyStyle,
  TableDataStyle,
  LinkDataStyle
} from './Table.style'

const Table = ({
  columns,
  data,
  rowSelection,
  actions,
  handleTableRowChecked,
  handleTableHeaderChecked,
  cancelTableItemsSelection,
  setCancelTableItemsSelection,
  ...rest
}) => {
  const [active, setActive] = useState(false)
  const [itemActive, setItemActive] = useState({})

  const handleActive = props => {
    setItemActive(props.column.id)
    setActive(true)
  }

  const handleSelectAll = (toggleRowSelectedAll, isAllRowsSelected) => {
    if (isAllRowsSelected) {
      toggleRowSelectedAll(false)
      handleTableHeaderChecked(false)
    } else {
      toggleRowSelectedAll(true)
      handleTableHeaderChecked(true)
    }
  }

  const handleSelectRow = (row, toggleRowSelected) => {
    if (row.isSelected) {
      handleTableRowChecked(row.original, false)
      toggleRowSelected(row.path, false)
    } else {
      handleTableRowChecked(row.original, true)
      toggleRowSelected(row.path, true)
    }
  }

  const handleRenderCheckbox = () => ({
    id: 'selection',
    Header: ({
      getToggleAllRowsSelectedProps,
      isAllRowsSelected,
      toggleRowSelectedAll
    }) => {
      if (cancelTableItemsSelection) {
        toggleRowSelectedAll(false)
        setCancelTableItemsSelection(false)
      }
      return (
        <Checkbox
          id="select-all"
          {...getToggleAllRowsSelectedProps({
            onChange: () =>
              handleSelectAll(toggleRowSelectedAll, isAllRowsSelected)
          })}
        />
      )
    },
    Cell: ({ row, toggleRowSelected }) => {
      return (
        <Checkbox
          id={row.index}
          {...row.getToggleRowSelectedProps({
            onChange: () => handleSelectRow(row, toggleRowSelected)
          })}
        />
      )
    }
  })

  const handleColumns = () => {
    return columns.map((item, index) => ({
      Header: props => {
        return (
          <HeaderTable
            title={item.title}
            active={
              props.column.id === itemActive
                ? active
                : props.column.index === 1 && !active
                ? true
                : false
            }
            onClick={() => handleActive(props)}
          />
        )
      },
      ...item,
      titleHeader: 'Item 1',
      accessor: item.accessor // String-based value accessors!
    }))
  }

  const columnsCustom = () => {
    if (rowSelection && !actions) {
      return [handleRenderCheckbox(), ...handleColumns()]
    }

    if (actions && !rowSelection) {
      return [
        ...handleColumns(),
        {
          Header: () => null,
          id: 'actions',
          Cell: props => (
            <ContainerActions
              id={props.row.original.id}
              data={data}
              {...rest}
            />
          )
        }
      ]
    }

    if (actions && rowSelection) {
      return [
        handleRenderCheckbox(),
        ...handleColumns(),
        {
          Header: () => null,
          id: 'actions',
          Cell: props => {
            return (
              <ContainerActions
                id={props.row.original.id}
                data={data}
                {...rest}
              />
            )
          }
        }
      ]
    }
    return handleColumns()
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageSize }
  } = useTable(
    {
      columns: columnsCustom(),
      data,
      initialState: { pageIndex: 0 }
    },
    useSortBy,
    usePagination,
    useRowSelect
  )

  return (
    <div style={{ marginTop: 22 }}>
      <PaginationComponent
        page={page}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
        data={data}
      />
      <TableStyle {...getTableProps()}>
        {headerGroups.map(headerGroup => (
          <TableRowStyle {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableHeadStyle
                {...column.getHeaderProps(column.getSortByToggleProps())}
                {...rest}
                title=""
              >
                {column.render('Header')}
              </TableHeadStyle>
            ))}
          </TableRowStyle>
        ))}
        <TableBodyStyle {...getTableBodyProps()}>

            <>
              {page.map(
                (row, i) =>
                  prepareRow(row) || (
                    <TableRowStyle {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <TableDataStyle {...cell.getCellProps()} {...rest}>
                            {cell.column.index === 1 ? (
                              <LinkDataStyle
                                to={
                                  USER_MANAGEMENT_ROOT_PATH + columns[0].sendTo
                                }
                              >
                                {cell.render('Cell')}
                              </LinkDataStyle>
                            ) : (
                              cell.render('Cell')
                            )}
                          </TableDataStyle>
                        )
                      })}
                    </TableRowStyle>
                  )
              )}
            </>

        </TableBodyStyle>
      </TableStyle>
      {data.length > 10 && (
        <PaginationComponent
          page={page}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
          data={data}
        />
      )}
    </div>
  )
}

export default Table
