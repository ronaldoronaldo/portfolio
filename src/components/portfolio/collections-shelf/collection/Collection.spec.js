import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import { Collection } from './Collection'
import { Cover } from './Collection.styles'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(() => ({}))

describe('Collection', () => {
  let props

  beforeEach(() => {
    props = {
      collection: { name: '', image: '' },
      onClickCollection: jest.fn()
    }
  })

  it('should render correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Collection {...props} />
        </MemoryRouter>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })

  it('calls click event', () => {
    const cover = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Collection {...props} />
        </MemoryRouter>
      </Provider>
    ).find(Cover)

    cover.simulate('click')
    expect(props.onClickCollection).toHaveBeenCalled()
  })
})
