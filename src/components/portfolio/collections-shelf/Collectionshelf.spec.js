import React from 'react'
import { MemoryRouter } from 'react-router'
import CollectionShelf from './CollectionShelf'
import renderer from 'react-test-renderer'

describe('CollectionShelf', () => {
  let props

  beforeEach(() => {
    props = {
      title: '',
      data: [],
      onClickCollection: jest.fn(),
      loading: false
    }
  })

  it('should render correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <CollectionShelf {...props} />
        </MemoryRouter>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
