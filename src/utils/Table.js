import dataFake from './data'

const handleTable = (useState, data = dataFake) => {
  const [selectedTableItems, setSelectedTableItems] = useState([])
  const [tableData] = useState(data)
  const [cancelTableItemsSelection, setCancelTableItemsSelection] = useState(
    false
  )

  const handleTableRowChecked = (row, checked) => {
    if (checked) {
      setSelectedTableItems([...selectedTableItems, row])
    } else {
      const removeItem = selectedTableItems.filter(item => {
        if (item.id !== row.id) {
          return item
        }
      })
      setSelectedTableItems(removeItem)
    }
  }

  const handleTableHeaderChecked = checked => {
    if (checked) {
      setSelectedTableItems(tableData)
    } else {
      setSelectedTableItems([])
    }
  }

  const handleCancelTableSelection = () => {
    setCancelTableItemsSelection(true)
    setSelectedTableItems([])
  }

  return {
    handleTableRowChecked,
    handleTableHeaderChecked,
    handleCancelTableSelection,
    cancelTableItemsSelection,
    setCancelTableItemsSelection,
    selectedTableItems,
    tableData
  }
}

export default handleTable
