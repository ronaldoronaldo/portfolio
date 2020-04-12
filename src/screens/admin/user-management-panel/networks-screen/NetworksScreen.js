import React, { useState, useEffect } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import Table from 'components/admin/user-management-panel/table'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import handleTable from 'utils/Table'
import { withApollo } from 'react-apollo'
import { listEntities } from 'utils/queries'
import { USER_MANAGEMENT_PANEL_NETWORKS_CREATE_PATH } from 'routes'

const NetworksScreen = ({ client, ...props }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listEntities(client, {
      entityType: 'network',
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
      sendTo: '/marcas'
    },
    {
      title: 'Marcas',
      accessor: 'count_child'
    },
    {
      title: 'Unitys',
      accessor: 'count_grand_child'
    }
  ]

  return (
    <Container>
      <ContentMenu
        title="Redes"
        buttonCreateConfig={{
          text: 'Criar rede',
          to: USER_MANAGEMENT_PANEL_NETWORKS_CREATE_PATH
        }}
        selects={[]}
        handleCancelTableSelection={handleCancelTableSelection}
        selectedTableItems={selectedTableItems}
        filter={false}
        itensDropdownMenu={[
          'Download dados (Planilha)',
          'Imprimir dados',
          'Renovação',
          'Ajuste',
          'Adição'
        ]}
      />
      <Table
        data={data}
        columns={columns}
        actions
        rowSelection
        handleTableRowChecked={handleTableRowChecked}
        handleTableHeaderChecked={handleTableHeaderChecked}
        cancelTableItemsSelection={cancelTableItemsSelection}
        setCancelTableItemsSelection={setCancelTableItemsSelection}
        editionUrlParam="redes"
      />
    </Container>
  )
}

export default withApollo(NetworksScreen)
