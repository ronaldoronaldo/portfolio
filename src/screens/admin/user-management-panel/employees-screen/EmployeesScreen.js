import React, { useState, useEffect } from 'react'
import {
  Container,
  Column,
  Row
} from 'components/admin/user-management-panel/grid'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import Table from 'components/admin/user-management-panel/table'
import { USER_MANAGEMENT_PANEL_EMPLOYEES_CREATE_PATH } from 'routes'
import handleTable from 'utils/Table'
import { listUsers } from 'utils/queries'
import { withApollo } from 'react-apollo'
import goToAddScreen from 'utils/goToAddScreen'
import EmptyDataContent from 'components/admin/user-management-panel/empty-data-content'
import { colors } from 'config/ui'
import { SpinnerContainer } from 'styles/common/Common.styles'
import Spinner from 'components/lib/loaders/Spinner'

const SchoolsScreen = ({ client, ...props }) => {
  const [data, setData] = useState(['loading'])
  // const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listUsers(client, 'EMPLOYEE')
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
      sendTo: '/bolsistas'
    }
  ]

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
        title="Funcionários"
        description="Não encontramos nenhum funcionário cadastrado"
        iconButton="add"
        textButton="Funcionário"
        onClick={() => goToAddScreen(props)}
      />
    )
  }

  return (
    <Container>
      <ContentMenu
        title="Funcionários"
        buttonCreateConfig={{
          text: 'Criar funcionário',
          to: USER_MANAGEMENT_PANEL_EMPLOYEES_CREATE_PATH
        }}
        selects={selects}
        handleCancelTableSelection={handleCancelTableSelection}
        selectedTableItems={selectedTableItems}
        itensDropdownMenu={['Opções não definidas']}
        filter={false}
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

export default withApollo(SchoolsScreen)
