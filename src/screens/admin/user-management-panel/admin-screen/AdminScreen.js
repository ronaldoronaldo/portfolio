import React, { useState, useEffect } from 'react'
import {
  Container,
  Column,
  Row
} from 'components/admin/user-management-panel/grid'
import Table from 'components/admin/user-management-panel/table'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import handleTable from 'utils/Table'
import { withApollo } from 'react-apollo'
import { listUsers } from 'utils/queries'
import goToAddScreen from 'utils/goToAddScreen'
import EmptyDataContent from 'components/admin/user-management-panel/empty-data-content'
import { colors } from 'config/ui'
import { SpinnerContainer } from 'styles/common/Common.styles'
import Spinner from 'components/lib/loaders/Spinner'
import { USER_MANAGEMENT_PANEL_ADMIN_CREATE_PATH } from 'routes'

const AdminScreen = ({ client, ...props }) => {
  const [data, setData] = useState(['loading'])
  // const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listUsers(client, 'ADMIN')
    setData(dataEntities)
  }

  const {
    handleTableRowChecked,
    handleTableHeaderChecked,
    handleCancelTableSelection,
    cancelTableItemsSelection,
    setCancelTableItemsSelection,
    selectedTableItems
  } = handleTable(useState)

  const columns = [
    {
      title: 'Nome',
      accessor: 'userName',
      sendTo: '/diretores'
    }
  ]

  useEffect(() => {
    if (props.location.search) {
      localStorage.setItem('platform', props.location.search.split('=')[1])
    }
  }, [])

  if (data[0] === 'loading') {
    return (
      <SpinnerContainer>
        <Spinner color={colors.primary} size={4} />
      </SpinnerContainer>
    )
  }


  if (data.length <= 0) {
    return (
      <EmptyDataContent
        iconName="user-off"
        title="Admin"
        description="Não encontramos nenhum admin cadastrado"
        iconButton="add"
        textButton="Adicionar admin"
        onClick={() => goToAddScreen(props)}
      />
    )
  }


  return (
    <Container>
      <ContentMenu
        title="Admin"
        buttonCreateConfig={{
          text: 'Criar admin',
          to: USER_MANAGEMENT_PANEL_ADMIN_CREATE_PATH
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
          />
        </Column>
      </Row>
    </Container>
  )
}

export default withApollo(AdminScreen)
