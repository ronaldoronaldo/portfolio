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
// import { Tooltip } from 'components/lib/tooltips'
// import { ContainerPlatform } from 'styles/common/Common.styles'
import { USER_MANAGEMENT_PANEL_SCHOOLS_CLASSES_CREATE_PATH } from 'routes'
import { withApollo } from 'react-apollo'
import { listEntities } from 'utils/queries'

const SchoolClassesScreen = ({ client, ...props }) => {
  const [data, setData] = useState([])
  // const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    dataEntitiesFn()
  }, [])

  const dataEntitiesFn = async () => {
    const dataEntities = await listEntities(client, {
      entityType: 'class',
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
      sendTo: '/alunos'
    },
    {
      title: 'Pertence a',
      accessor: 'parent'
    },
    {
      title: 'Alunos',
      accessor: 'count_readers'
    }
    // {
    //   title: 'Plataforma',
    //   accessor: 'classes.platform',
    //   Cell: ({ row }) => {
    //     return (
    //       <ContainerPlatform>
    //         <div>
    //           <img
    //             src={row.original.classes.platform[0]}
    //             style={{ marginRight: 8 }}
    //           />
    //           <Tooltip text="Árvore disponível" />
    //         </div>
    //
    //         <div>
    //           <img
    //             src={row.original.classes.platform[1]}
    //             style={{ opacity: 0.3 }}
    //           />
    //           <Tooltip text="Guten indisponível" />
    //         </div>
    //       </ContainerPlatform>
    //     )
    //   }
    // }
  ]

  const handleFilterSubmit = values => {
    // const newArrFilter = data.filter(item => item.parent === values[0])
    // setFilteredData(newArrFilter)
  }

  const handleClearAllFilters = () => {
    // setFilteredData(data)
  }

  const itensSchoolsFilter = data.map(item => item.parent)

  const selects = [
    {
      items: removeArrayDuplicates(itensSchoolsFilter).sort(),
      placeholder: 'Selecione uma unidade',
      searchInputPlaceholder: 'Busque por unidade',
      headerTitle: 'Filtrar por unidade',
      activeSelectButton: false
    }
  ]

  return (
    <Container>
      <ContentMenu
        title="Classs"
        buttonCreateConfig={{
          text: 'Criar turma',
          to: USER_MANAGEMENT_PANEL_SCHOOLS_CLASSES_CREATE_PATH
        }}
        selects={selects}
        handleCancelTableSelection={handleCancelTableSelection}
        selectedTableItems={selectedTableItems}
        itensDropdownMenu={[
          'Imprimir Carteirinhas',
          'Download dados (Planilha)',
          'Imprimir Dados'
        ]}
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
            editionUrlParam="turmas"
            col2Width={246}
            col3Width={276}
            col4Width={140}
            col5Width={150}
          />
        </Column>
      </Row>
    </Container>
  )
}

export default withApollo(SchoolClassesScreen)
