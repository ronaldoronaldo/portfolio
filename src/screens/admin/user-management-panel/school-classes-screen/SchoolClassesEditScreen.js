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

import { mapDegree, unMapDegree } from 'utils/degree'

const schoolYears = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'M',
  'EI'
].map(item => mapDegree(item))

const SchoolClassesEditScreen = ({ client, ...props }) => {
  const [linkedItems, setLinkedItems] = useState([])
  const [unlinkedItems, setUnlinkedItems] = useState([])

  const [belongsTo, setBelongsTo] = useState('')
  const [schoolYear, setSchoolYear] = useState('')
  const [nameInputValue, setNameInputValue] = useState('')
  const [entityId, setEntityId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [alertData, setAlertData] = useState(null)
  const [parentsEntities, setParentsEntities] = useState([])
  const [parentId, setParentId] = useState(null)

  useEffect(() => {
    const { id } = props.match.params
    dataGetParentsEntitiesFn().then(()=> {
      if (id) {
        setEntityId(~~id)
        dataGetEntityFn(~~id)
      }
    }).catch(err => console.log(err))
  }, [parentsEntities])

  const dataGetParentsEntitiesFn = async () => {
    const dataGetParentsEntities = await getParentsFromEntityType(client, {
      rootStructure: 'network > trademark > school > class',
      entityType: 'class'
    })

    setParentsEntities(dataGetParentsEntities)
  }

  const dataGetEntityFn = async (id) => {
    const entity = await getEntity(client, id)
    console.log(entity)
    setNameInputValue(entity.name)
    setSchoolYear(entity.grade || schoolYears[3])
    const parentId = ~~entity.ancestry.split('/')[3]
    parentsEntities.forEach((parent) => {
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

  const handleChangeBelongsTo = item => {
    setBelongsTo(item)

    const currentParentId = parentsEntities.find(
      itemParent => itemParent.name === item
    ).id
    setParentId(currentParentId)
  }

  const handleChangeSchoolYear = item => {
    setSchoolYear(item)
  }

  const handleSave = async () => {
    if (nameInputValue.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'O nome da turma não pode ser vazio.',
        textButton: 'Entendi!'
      })

      return
    }

    if (schoolYear.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'Selecione o ano escolar.',
        textButton: 'Entendi!'
      })

      return
    }

    if (belongsTo.length <= 0) {
      setAlertData({
        title: 'Ops',
        message: 'Selecione a unidade que a turma pertence.',
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
        grade: schoolYear
      })
      if (editSuccess) {
        setIsLoading(false)
        setAlertData({
          title: 'Sucesso',
          message: 'Class editada com sucesso.',
          textButton: 'Entendi!'
        })

        setNameInputValue('')
        setSchoolYear('')
        setBelongsTo('')
      } else {
        setIsLoading(false)
        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para editar turmas.',
          textButton: 'Entendi!'
        })
      }
    } else {
      const success = await createEntity(client, {
        name: nameInputValue,
        parentId,
        grade: unMapDegree(schoolYear)
      })

      if (success) {
        setIsLoading(false)

        setAlertData({
          title: 'Sucesso',
          message: 'Class criada com sucesso.',
          textButton: 'Entendi!'
        })

        setNameInputValue('')
        setBelongsTo('')
        setSchoolYear('')
      } else {
        setIsLoading(false)

        setAlertData({
          title: 'Ops',
          message: 'Vocẽ não têm permissão para criar turmas.',
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
            id={'schoolclassName'}
            placeholder="Nome da turma"
            value={nameInputValue}
            onChange={handleNameChange}
          />
          <Select
            text={schoolYear}
            items={schoolYears}
            maxWidth={620}
            label="Ano escolar"
            activeSelectButton={schoolYear.length > 0}
            labelColor={colors.black3}
            onChange={handleChangeSchoolYear}
            dropdownStyle={{
              top: 128
            }}
            style={{
              marginBottom: 36,
              borderColor: colors.black3,
              color: colors.black5
            }}
          />
          <Select
            text={belongsTo}
            items={parentsEntities.map(item => item.name)}
            maxWidth={620}
            label="Pertence a unidade"
            activeSelectButton={belongsTo.length > 0}
            labelColor={colors.black3}
            onChange={handleChangeBelongsTo}
            dropdownStyle={{
              top: 212
            }}
            style={{
              marginBottom: 36,
              borderColor: colors.black3,
              color: colors.black5
            }}
          />
          {/*<ShowTags*/}
          {/*  tags={linkedItems}*/}
          {/*  label="Alunos dessa turma"*/}
          {/*  removeTag={removeLinkedItem}*/}
          {/*/>*/}
          {/*<PagedListHeader>*/}
          {/*  <ColumnStyle sm={6}>*/}
          {/*    <Title*/}
          {/*      text="Alunos sem turma"*/}
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
          {/*      placeholder="Buscar alunos sem turma"*/}
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

export default withApollo(SchoolClassesEditScreen)
