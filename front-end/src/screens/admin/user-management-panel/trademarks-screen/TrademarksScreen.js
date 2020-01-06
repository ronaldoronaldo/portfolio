import React, { useEffect, useState } from 'react'
import {
  Container,
  Column,
  Row
} from 'components/admin/user-management-panel/grid'
import Table from 'components/admin/user-management-panel/table'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import handleTable from 'utils/Table'
import removeArrayDuplicates from 'utils/removeArrayDuplicates'
import { USER_MANAGEMENT_PANEL_TRADEMARKS_CREATE_PATH } from 'routes'
import { withApollo } from 'react-apollo'
import { listEntities } from 'utils/queries'

const TrademarksScreen = ({ client, ...props }) => {
  const [data, setData] = useState([])
  // const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listEntities(client, {
      entityType: 'trademark',
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
      sendTo: '/unidades'
    },
    {
      title: 'Pertence a',
      accessor: 'parent'
    },
    {
      title: 'Unidades',
      accessor: 'children_count'
    },
    {
      title: 'Alunos',
      accessor: 'count_readers'
    }
  ]

  const itensNetworkFilter = data.map(item => item.parent)

  const selects = [
    {
      items: removeArrayDuplicates(itensNetworkFilter).sort(),
      placeholder: 'Selecione uma rede',
      searchInputPlaceholder: 'Busque por rede',
      headerTitle: 'Filtrar por rede',
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
        title="Marcas"
        buttonCreateConfig={{
          text: 'Criar marca',
          to: USER_MANAGEMENT_PANEL_TRADEMARKS_CREATE_PATH
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
            editionUrlParam="marcas"
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

export default withApollo(TrademarksScreen)
