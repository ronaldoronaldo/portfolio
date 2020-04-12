import React, { useState, useEffect } from 'react'
import { Container } from 'components/admin/user-management-panel/grid'
import { Title } from 'components/lib/titles'
import { ExpandableSearchInput } from 'components/admin/user-management-panel/expandable-search-input'
import Select from 'components/lib/selects/Select'

import {
  WrapperStyle,
  BodyStyle,
  InputStyle,
  ColumnStyle,
  FinishButtons,
  IconButtonStyled,
  PagedListHeader
} from 'styles/common/Common.styles'
import { colors } from 'config/ui'
import PagedList from 'components/admin/user-management-panel/paged-list/PagedList'
import Button from 'components/lib/buttons/Button'
import ShowTags from 'components/admin/user-management-panel/show-tags'
import { HeaderEdit } from 'components/admin/user-management-panel/header'
import Alert from 'components/lib/alerts/Alert'

import { withApollo } from 'react-apollo'
import { createEntity, editEntity } from 'utils/mutations'
import { getParentsFromEntityType, getEntity } from 'utils/queries'

const SchoolsEditScreen = ({ client, ...props }) => {
  const [linkedItems, setLinkedItems] = useState([])
  const [unlinkedItems, setUnlinkedItems] = useState([])

  const [nameInputValue, setNameInputValue] = useState('')
  const [inepInputValue, setInepInputValue] = useState('')
  const [schoolId, setSchoolId] = useState('')
  const [belongsTo, setBelongsTo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [parentsEntities, setParentsEntities] = useState([])
  const [parentId, setParentId] = useState(null)

  useEffect(() => {
    const { id } = props.match.params
    dataGetParentsEntitiesFn().then(()=> {
      if (id) {
        setSchoolId(~~id)
        dataGetEntityFn(~~id)
      }
    }).catch(err => console.log(''))
  }, [parentsEntities])

  const dataGetParentsEntitiesFn = async () => {
    const dataGetParentsEntities = await getParentsFromEntityType(client, {
      rootStructure: 'network > trademark > school > class',
      entityType: 'school'
    })

    setParentsEntities(dataGetParentsEntities)
  }

  const dataGetEntityFn = async (id) => {
    const entity = await getEntity(client, id)
    setNameInputValue(entity.name)
    setInepInputValue(entity.inep)
    const parentId = ~~entity.ancestry.split('/')[2]
    parentsEntities.forEach((parent) => {
      if (parent.id === parentId) {
        setParentId(parent.id)
        setBelongsTo(parent.name)
      }
    })
  }

  const handleSelectValue = item => {
    setBelongsTo(item)

    const currentParentId = parentsEntities.find(
      itemParent => itemParent.name === item
    ).id
    setParentId(currentParentId)
  }

  const handleSave = async () => {
    if (nameInputValue.length <= 0 || inepInputValue <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'Todos os campos devem ser preenchidos.',
        textButton: 'Entendi!'
      })

      return
    }

    if (belongsTo.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'Selecione a rede que a unidade pertence.',
        textButton: 'Entendi!'
      })

      return
    }

    if (inepInputValue.length !== 8) {
      setAlertData({
        title: 'Ops',
        message: 'Inep deve conter 8 caracteres.',
        textButton: 'Entendi!'
      })

      return
    }

    setIsLoading(true)
    if (schoolId) {
      const editSuccess = await editEntity(client, {
        name: nameInputValue,
        parentId,
        entityId: schoolId,
        inep: inepInputValue,
        grade: 'M'
      })
      if (editSuccess) {
        setIsLoading(false)
        setAlertData({
          title: 'Sucesso',
          message: 'Unity editada com sucesso.',
          textButton: 'Entendi!'
        })

        setNameInputValue('')
        setInepInputValue('')
        setBelongsTo('')
      } else {
        setIsLoading(false)
        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para editar unidades.',
          textButton: 'Entendi!'
        })
      }
    }
    else {
      const success = await createEntity(client, {
        name: nameInputValue,
        parentId,
        inep: inepInputValue
      })
      if (success) {
        setIsLoading(false)

        setAlertData({
          title: 'Sucesso',
          message: 'Unity criada com sucesso.',
          textButton: 'Entendi!'
        })

        setNameInputValue('')
        setInepInputValue('')
        setBelongsTo('')
      } else {
        setIsLoading(false)
        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para criar unidades.',
          textButton: 'Entendi!'
        })
      }
    }
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

  const handleInepChange = evt => {
    setInepInputValue(evt.target.value)
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
            id="unityName"
            placeholder="Nome da unidade"
            value={nameInputValue}
            onChange={handleNameChange}
          />
          <Select
            text={belongsTo}
            items={parentsEntities.map(item => item.name)}
            maxWidth={620}
            label={'Pertence a rede'}
            onChange={handleSelectValue}
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
          <InputStyle
            placeholder="INEP"
            value={inepInputValue}
            onChange={handleInepChange}
            id={'inep'}
          />
          {/*<ShowTags*/}
          {/*  tags={linkedItems}*/}
          {/*  label="Classs dessa unidade"*/}
          {/*  removeTag={removeLinkedItem}*/}
          {/*/>*/}
          {/*<PagedListHeader>*/}
          {/*  <ColumnStyle sm={6}>*/}
          {/*    <Title*/}
          {/*      text="Classs não vinculadas"*/}
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
          {/*      placeholder="Buscar turmas não vinculadas"*/}
          {/*    />*/}
          {/*  </ColumnStyle>*/}
          {/*</PagedListHeader>*/}
          {/*<PagedList*/}
          {/*  items={unlinkedItems}*/}
          {/*  onItemClicked={addLinkedItem}*/}
          {/*  emptyLabel="turmas"*/}
          {/*/>*/}
          <FinishButtons>
            <IconButtonStyled
              text="Cancel"
              color={colors.black4}
              onClick={() => props.history.goBack()}
              iconName=""
            />
            <Button
              iconName="add"
              text="Save"
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

export default withApollo(SchoolsEditScreen)
