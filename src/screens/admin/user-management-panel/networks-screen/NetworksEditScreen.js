import React, {useEffect, useState} from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import { HeaderEdit } from 'components/admin/user-management-panel/header'
import { colors } from 'config/ui'
import Button from 'components/lib/buttons/Button'
import Alert from 'components/lib/alerts/Alert'
import { withApollo } from 'react-apollo'
import { createEntity, editEntity } from 'utils/mutations'
import { getEntity } from 'utils/queries'
import {
  WrapperStyle,
  BodyStyle,
  InputStyle,
  // ColumnStyle,
  FinishButtons,
  IconButtonStyled,
  // PagedListHeader
} from 'styles/common/Common.styles'

// import { Title } from 'components/lib/titles'
// import { ExpandableSearchInput } from 'components/admin/user-management-panel/expandable-search-input'
// import PagedList from 'components/admin/user-management-panel/paged-list/PagedList'
// import ShowTags from 'components/admin/user-management-panel/show-tags'


const NetworksEditScreen = ({ client, ...props }) => {
  // const [linkedItems, setLinkedItems] = useState([])
  // const [unlinkedItems, setUnlinkedItems] = useState([])
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [rootId, setRootId] = useState(null)
  const [entityId, setEntityId] = useState('')

  useEffect(() => {
    const { id } = props.match.params
    if (id) {
      setEntityId(~~id)
      dataGetEntityFn(~~id)
    } else {
      setRootId(1)
    }
  }, [])

  const dataGetEntityFn = async (id) => {
    const entity = await getEntity(client, id)
    setValue(entity.name)
    setRootId(entity.rootId)
  }

  // const handleSearchInput = () => {
  //   console.log('search')
  // }
  //
  // const removeLinkedItem = index => {
  //   const newUnlinkedItems = [...unlinkedItems]
  //   const newLinkedItems = linkedItems.filter((item, itemIndex) => {
  //     if (index !== itemIndex) {
  //       return item
  //     } else {
  //       newUnlinkedItems.push(item)
  //     }
  //   })
  //   setLinkedItems(newLinkedItems)
  //   setUnlinkedItems(newUnlinkedItems)
  // }
  //
  // const addLinkedItem = index => {
  //   const newLinkedItems = [...linkedItems]
  //   const newUnlinkedItems = unlinkedItems.filter((item, itemIndex) => {
  //     if (index !== itemIndex) {
  //       return item
  //     } else {
  //       newLinkedItems.push(item)
  //     }
  //   })
  //   setLinkedItems(newLinkedItems)
  //   setUnlinkedItems(newUnlinkedItems)
  // }

  const handleInputValue = evt => {
    setValue(evt.target.value)
  }

  const handleSave = async () => {
    if (value.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'O nome da rede não pode ser vazio.',
        textButton: 'Entendi!'
      })

      return
    }

    setIsLoading(true)
    if (entityId) {
      const editSuccess = await editEntity(client, {
        name: value,
        parentId: rootId,
        entityId,
        inep: '12345678',
        grade: 'M'
      })
      if (editSuccess) {
        setIsLoading(false)
        setAlertData({
          title: 'Sucesso',
          message: 'Rede editada com sucesso.',
          textButton: 'Entendi!'
        })

        setValue('')
      } else {
        setIsLoading(false)
        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para editar redes.',
          textButton: 'Entendi!'
        })
      }
    } else {
      const success = await createEntity(client, {
        name: value,
        parentId: parseInt(rootId)
      })
      if (success) {
        setIsLoading(false)

        setAlertData({
          title: 'Sucesso',
          message: 'Rede criada com sucesso.',
          textButton: 'Entendi!'
        })

        setValue('')
      } else {
        setIsLoading(false)
        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para criar redes.',
          textButton: 'Entendi!'
        })
      }
    }
  }

  const onClickAlert = () => {
    setAlertData(null)
    props.history.goBack()
  }

  return (
    <Container>
      {alertData && (
        <Alert
          title={alertData.title}
          message={alertData.message}
          textButton={alertData.textButton}
          onClick={onClickAlert}
        />
      )}
      <WrapperStyle>
        <HeaderEdit title={value} />
        <BodyStyle>
          <InputStyle
            id={'networkName'}
            placeholder="Nome da rede"
            value={value}
            onChange={handleInputValue}
          />
          {/*<ShowTags*/}
          {/*  tags={linkedItems}*/}
          {/*  label="Marcas dessa rede"*/}
          {/*  removeTag={removeLinkedItem}*/}
          {/*/>*/}
          {/*<PagedListHeader>*/}
          {/*  <ColumnStyle sm={6}>*/}
          {/*    <Title*/}
          {/*      text="Marcas não vinculadas"*/}
          {/*      size={5}*/}
          {/*      sizeMobile={5}*/}
          {/*      textAlign="left"*/}
          {/*      style={{ color: colors.black5, margin: 0 }}*/}
          {/*    />*/}
          {/*  </ColumnStyle>*/}
          {/*  <ColumnStyle sm={6}>*/}
          {/*    <ExpandableSearchInput*/}
          {/*      value={''}*/}
          {/*      onChange={handleSearchInput}*/}
          {/*      placeholder="Buscar marcas não vinculadas"*/}
          {/*    />*/}
          {/*  </ColumnStyle>*/}
          {/*</PagedListHeader>*/}
          {/*<PagedList*/}
          {/*  items={unlinkedItems}*/}
          {/*  onItemClicked={addLinkedItem}*/}
          {/*  emptyLabel="marcas"*/}
          {/*/>*/}
          <FinishButtons>
            <IconButtonStyled
              text="Cancelar"
              color={colors.black4}
              onClick={() => props.history.goBack()}
              iconName=""
            />
            <Button
              iconName="add"
              text="Salvar"
              loading={isLoading}
              primary
              onClick={handleSave}
              iconSize={16}
              style={{
                width: 107,
                height: 40,
                marginLeft: 8
              }}
            />
          </FinishButtons>
          <div style={{ height: 56 }} />
        </BodyStyle>
      </WrapperStyle>
    </Container>
  )
}

export default withApollo(NetworksEditScreen)
