import React, { useEffect, useState } from 'react'
import {
  Container,
  Column,
  Row
} from 'components/admin/user-management-panel/grid'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import Table from 'components/admin/user-management-panel/table'
import removeArrayDuplicates from 'utils/removeArrayDuplicates'
import handleTable from 'utils/Table'
import { USER_MANAGEMENT_PANEL_SCHOOLS_CREATE_PATH } from 'routes'
import { withApollo } from 'react-apollo'
import { listEntities } from 'utils/queries'

const SchoolsScreen = ({ client, ...props }) => {
  const [data, setData] = useState([])
  // const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listEntities(client, {
      entityType: 'school',
      rootStructure: 'network > trademark > school > class'
    })
    setData(dataEntities)
  }

  const {
    handleTableRowChecked,
    handleTableHeaderChecked,
    handleCancelTableSelection,
    cancelTableItemsSelection,
    setCancelTableItemsSelection,
    selectedTableItems
  } = handleTable(useState, data)

  const columns = [
    {
      title: 'Nome',
      accessor: 'name',
      sendTo: '/turmas'
    },
    {
      title: 'Pertence a',
      accessor: 'parent'
    },
    {
      title: 'Turmas',
      accessor: 'children_count'
    },
    {
      title: 'Alunos',
      accessor: 'count_readers'
    }
  ]

  const itensTrademarksFilter = data.map(item => item.parent)

  const selects = [
    {
      items: removeArrayDuplicates(itensTrademarksFilter).sort(),
      placeholder: 'Selecione uma marca',
      searchInputPlaceholder: 'Busque por marca',
      headerTitle: 'Filtrar por marca',
      activeSelectButton: false
    }
  ]

  const handleFilterSubmit = values => {
    // const newArrFilter = data.filter(item => item.parent === values[0])
    // setFilteredData(newArrFilter)
  }

  const handleClearAllFilters = () => {
    // setFilteredData(data)
  }

  return (
    <Container>
      <ContentMenu
        title="Unidades"
        buttonCreateConfig={{
          text: 'Criar unidade',
          to: USER_MANAGEMENT_PANEL_SCHOOLS_CREATE_PATH
        }}
        selects={selects}
        handleCancelTableSelection={handleCancelTableSelection}
        selectedTableItems={selectedTableItems}
        itensDropdownMenu={['Opções não definidas']}
        filter
        handleFilterSubmit={handleFilterSubmit}
        clearAllFilters={handleClearAllFilters}
      />
      <Row>
        <Column>
          <Table
            data={data}
            columns={columns}
            actions
            rowSelection
            handleTableRowChecked={handleTableRowChecked}
            handleTableHeaderChecked={handleTableHeaderChecked}
            cancelTableItemsSelection={cancelTableItemsSelection}
            setCancelTableItemsSelection={setCancelTableItemsSelection}
            editionUrlParam="unidades"
            col2Width={246}
            col3Width={276}
            col4Width={140}
            col5Width={50}
          />
        </Column>
      </Row>
    </Container>
  )
}

export default withApollo(SchoolsScreen)
