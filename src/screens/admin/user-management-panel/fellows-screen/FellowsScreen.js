import React, { useState, useEffect } from 'react'
import {
  Container,
  Column,
  Row
} from 'components/admin/user-management-panel/grid'
import ContentMenu from 'components/admin/user-management-panel/content-menu'
import Table from 'components/admin/user-management-panel/table'
import handleTable from 'utils/Table'
import { withApollo } from 'react-apollo'
import { listUsers } from 'utils/queries'
import EmptyDataContent from 'components/admin/user-management-panel/empty-data-content'
import { colors } from 'config/ui'
import {SpinnerContainer} from 'styles/common/Common.styles'
import Spinner from 'components/lib/loaders/Spinner'
import removeArrayDuplicates from 'utils/removeArrayDuplicates'


const SchoolsScreen = ({client, ...props}) => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listUsers(client, 'SCHOLARSHIP_HOLDER')
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
      sendTo: '/bolsistas'
    },
    {
      title: 'Unity',
      accessor: 'parentName'
    }
  ]

  const itensUnitFilter = data.map(item => item.parentName)

  const selects = [
    {
      items: removeArrayDuplicates(itensUnitFilter).sort(),
      placeholder: 'Selecione uma unidade',
      searchInputPlaceholder: 'Busque por unidade',
      headerTitle: 'Filtrar por unidade',
      activeSelectButton: false
    }
  ]

  const handleFilterSubmit = values => {
    if (values.length <= 0){
      setFilteredData(data)
      return
    }
    const filteredData = data.filter(item => {
      return values[0] === item.parentName
    })
    setFilteredData(filteredData)

  }

  const handleClearAllFilters = () => {
    setFilteredData(data)
  }

  if(data[0] === 'loading'){
    return (
      <SpinnerContainer>
        <Spinner color={colors.primary} size={4}/>
      </SpinnerContainer>
    )
  }

  if(data.length <= 0){
    return (
      <EmptyDataContent
        iconName="user-heart"
        title="Bolsistas"
        description="Alunos bolsistas devem ser criados da área de alunos e vinculados como
            bolsistas através dessa página ou ao editar um usuário."
      />
    )
  }


  return (
    <Container>
          <ContentMenu
            title="Bolsistas"
            selects={selects}
            handleCancelTableSelection={handleCancelTableSelection}
            selectedTableItems={selectedTableItems}
            buttonCreate={false}
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
                exclude={false}
              />
            </Column>
          </Row>
    </Container>
  )
}

export default withApollo(SchoolsScreen)
