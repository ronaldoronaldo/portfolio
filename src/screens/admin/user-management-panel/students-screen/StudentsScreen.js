import React, { useState, useEffect } from 'react'
import {
  Container,
  Column,
  Row
} from 'components/admin/user-management-panel/grid'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import Table from 'components/admin/user-management-panel/table'
import { USER_MANAGEMENT_PANEL_STUDENTS_CREATE_PATH } from 'routes'

import handleTable from 'utils/Table'
import removeArrayDuplicates from 'utils/removeArrayDuplicates'
import { listUsers } from 'utils/queries'
import { withApollo } from 'react-apollo'
import goToAddScreen from 'utils/goToAddScreen'
import EmptyDataContent from 'components/admin/user-management-panel/empty-data-content'
import { colors } from 'config/ui'
import { SpinnerContainer } from 'styles/common/Common.styles'
import Spinner from 'components/lib/loaders/Spinner'
// import { ContainerPaymentStatus } from './StudentsScreen.style'
// import { Bullet } from 'components/lib/bullets'
// import { Tooltip } from 'components/lib/tooltips'
// import { colors } from 'config/ui'


const SchoolsScreen = ({ client, ...props }) => {
  const [data, setData] = useState(['loading'])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listUsers(client, 'STUDENT')
    console.log(dataEntities)
    setData(dataEntities)
    setFilteredData(dataEntities)
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
      sendTo: '/funcionarios'
    },
    {
      title: 'Classs',
      accessor: 'entityNames'
    },
    {
      title: 'Unity',
      accessor: 'parentName'
    },
    // {
    //   title: 'Status',
    //   accessor: 'paymentStatus',
    //   Cell: ({ row }) => {
    //     const paymentIsPending = !row.original.payment_status
    //     return (
    //       <ContainerPaymentStatus>
    //         <Bullet bgColor={paymentIsPending ? colors.red3 : colors.idGreen}>
    //           <Tooltip
    //             text={
    //               paymentIsPending
    //                 ? 'Aguardando pagamento'
    //                 : 'Pagamento confirmado'
    //             }
    //           />
    //         </Bullet>
    //       </ContainerPaymentStatus>
    //     )
    //   }
    // }
  ]

  // const itensNetworkFilter = data.map(item => item.network_name)
  // const itensTradeMarkFilter = data.map(item => item.trademark_name)
  const itensClassesFilter = data.map(item => item.entityNames)
  const itensUnitFilter = data.map(item => item.parentName)

  const selects = [
    {
      items: removeArrayDuplicates(itensUnitFilter).sort(),
      placeholder: 'Selecione uma unidade',
      searchInputPlaceholder: 'Busque por unidade',
      headerTitle: 'Filtrar por unidade',
      activeSelectButton: false
    },
    {
      items: removeArrayDuplicates(itensClassesFilter).sort(),
      placeholder: 'Selecione uma turma',
      searchInputPlaceholder: 'Busque por turma',
      headerTitle: 'Filtrar por turma',
      activeSelectButton: false
    }
    // {
    //   items: removeArrayDuplicates(itensNetworkFilter).sort(),
    //   placeholder: 'Selecione uma rede',
    //   searchInputPlaceholder: 'Busque por rede',
    //   headerTitle: 'Filtrar por rede',
    //   activeSelectButton: false
    // },
    // {
    //   items: removeArrayDuplicates(itensTradeMarkFilter).sort(),
    //   placeholder: 'Selecione uma marca',
    //   searchInputPlaceholder: 'Busque por marca',
    //   headerTitle: 'Filtrar por marca',
    //   activeSelectButton: false
    // },

  ]

  const handleFilterSubmit = values => {
    if (values.length <= 0) {
      setFilteredData(data)
      return
    }
    if (values.length === 1) {
      const filteredData = data.filter(item => {
        return values.indexOf(item.entityNames) > -1 || values.indexOf(item.parentName) > -1
      })
      setFilteredData(filteredData)
      return
    }
    if (values.length === 2) {
      const filteredData = data.filter(item => {
        return values[1] === item.entityNames && values[0] === item.parentName
      })
      setFilteredData(filteredData)
    }
  }

  const handleClearAllFilters = () => {
    setFilteredData(data)
  }

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
        title="Alunos"
        buttonCreateConfig={{
          text: 'Criar aluno',
          to: USER_MANAGEMENT_PANEL_STUDENTS_CREATE_PATH
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
            data={filteredData}
            columns={columns}
            actions
            rowSelection
            handleTableRowChecked={handleTableRowChecked}
            handleTableHeaderChecked={handleTableHeaderChecked}
            cancelTableItemsSelection={cancelTableItemsSelection}
            setCancelTableItemsSelection={setCancelTableItemsSelection}
            col2Width={254}
            col3Width={218}
            col4Width={203}
            col5Width={200}
          />
        </Column>
      </Row>
    </Container>
  )
}

export default withApollo(SchoolsScreen)
