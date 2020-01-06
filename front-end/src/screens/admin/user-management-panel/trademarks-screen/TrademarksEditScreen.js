import React, { useState, useEffect } from 'react'
import Select from 'components/lib/selects/Select'
import Button from 'components/lib/buttons/Button'
import Alert from 'components/lib/alerts/Alert'
import { Container } from 'components/admin/user-management-panel/grid'
import { colors } from 'config/ui'
import { HeaderEdit } from 'components/admin/user-management-panel/header'
import { withApollo } from 'react-apollo'
import { createEntity, editEntity } from 'utils/mutations'
import { getParentsFromEntityType, getEntity } from 'utils/queries'
import {
  WrapperStyle,
  BodyStyle,
  InputStyle,
  FinishButtons,
  IconButtonStyled
  // ColumnStyle,
  // PagedListHeader
} from 'styles/common/Common.styles'
import { ExpandableSearchInput } from 'components/admin/user-management-panel/expandable-search-input'
import { Title } from 'components/lib/titles'
// import PagedList from 'components/admin/user-management-panel/paged-list/PagedList'
// import ShowTags from 'components/admin/user-management-panel/show-tags'

const TrademarksEditScreen = ({ client, ...props }) => {
  // const [linkedItems, setLinkedItems] = useState([])
  // const [unlinkedItems, setUnlinkedItems] = useState([])

  const [entityId, setEntityId] = useState('')
  const [nameInputValue, setNameInputValue] = useState('')
  const [belongsTo, setBelongsTo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [parentsEntities, setParentsEntities] = useState([])
  const [parentId, setParentId] = useState(null)

  useEffect(() => {
    const { id } = props.match.params
    dataGetParentsEntitiesFn()
      .then(() => {
        if (id) {
          setEntityId(~~id)
          dataGetEntityFn(~~id)
        }
      })
      .catch(err => console.log(err))
  }, [parentsEntities])

  const dataGetParentsEntitiesFn = async () => {
    const dataGetParentsEntities = await getParentsFromEntityType(client, {
      rootStructure: 'network > trademark > school > class',
      entityType: 'trademark'
    })

    setParentsEntities(dataGetParentsEntities)
  }

  const dataGetEntityFn = async id => {
    const entity = await getEntity(client, id)
    console.log(entity)
    setNameInputValue(entity.name)
    const parentId = ~~entity.ancestry.split('/')[1]
    parentsEntities.forEach(parent => {
      if (parent.id === parentId) {
        setParentId(parent.id)
        setBelongsTo(parent.name)
      }
    })
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

  const handleNameChange = evt => {
    setNameInputValue(evt.target.value)
  }

  const handleSelectValue = item => {
    setBelongsTo(item)

    const currentParentId = parentsEntities.find(
      itemParent => itemParent.name === item
    ).id
    setParentId(currentParentId)
  }

  const handleSave = async () => {
    if (nameInputValue.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'O nome da marca não pode ser vazio.',
        textButton: 'Entendi!'
      })

      return
    }

    if (belongsTo.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'Selecione a rede que a marca pertence.',
        textButton: 'Entendi!'
      })

      return
    }

    setIsLoading(true)
    if (entityId) {
      const editSuccess = await editEntity(client, {
        name: nameInputValue,
        parentId,
        entityId,
        inep: '12345678', //back not accepting null values
        grade: 'M' //back not accepting null values
      })
      if (editSuccess) {
        setIsLoading(false)
        setAlertData({
          title: 'Sucesso',
          message: 'Marca editada com sucesso.',
          textButton: 'Entendi!'
        })

        setNameInputValue('')
        setBelongsTo('')
      } else {
        setIsLoading(false)
        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para editar marcas.',
          textButton: 'Entendi!'
        })
      }
    } else {
      const success = await createEntity(client, {
        name: nameInputValue,
        parentId,
      })

      if (success) {
        setIsLoading(false)

        setAlertData({
          title: 'Sucesso',
          message: 'Marca criada com sucesso.',
          textButton: 'Entendi!'
        })

        setNameInputValue('')
        setBelongsTo('')
      } else {
        setIsLoading(false)

        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para criar marcas.',
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
        <HeaderEdit title={nameInputValue} />
        <BodyStyle>
          <InputStyle
            id={'trademark'}
            placeholder="Nome da marca"
            value={nameInputValue}
            onChange={handleNameChange}
          />
          <Select
            text={belongsTo}
            items={parentsEntities.map(item => item.name)}
            onChange={handleSelectValue}
            maxWidth={620}
            label="Pertence a rede"
            activeSelectButton={belongsTo.length > 0}
            labelColor={colors.black3}
            dropdownStyle={{
              top: 128
            }}
            style={{
              marginBottom: 36,
              borderColor: colors.black3,
              color: colors.black5
            }}
          />
          {/*<ShowTags*/}
          {/*  tags={linkedItems}*/}
          {/*  label="Unidades dessa marca"*/}
          {/*  removeTag={removeLinkedItem}*/}
          {/*/>*/}
          {/*<PagedListHeader>*/}
          {/*  <ColumnStyle sm={6}>*/}
          {/*    <Title*/}
          {/*      text="Unidades não vinculadas"*/}
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
          {/*      placeholder="Buscar unidade não vinculada"*/}
          {/*    />*/}
          {/*  </ColumnStyle>*/}
          {/*</PagedListHeader>*/}
          {/*<PagedList*/}
          {/*  items={unlinkedItems}*/}
          {/*  onItemClicked={addLinkedItem}*/}
          {/*  emptyLabel="unidades"*/}
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
              primary
              onClick={handleSave}
              loading={isLoading}
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

export default withApollo(TrademarksEditScreen)
