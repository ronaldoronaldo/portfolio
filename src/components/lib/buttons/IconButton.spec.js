import React from 'react'
import { shallow } from 'enzyme'
import IconButton from './IconButton'

describe('<IconButton />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <IconButton
        onClick={() => console.log('ok')}
        text="teste"
        iconName="teste"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick event', () => {
    const onClickFunc = jest.fn()
    const wrapper = shallow(
      <IconButton onClick={onClickFunc} text="teste" iconName="teste" />
    )
    wrapper.props().onClick()
    expect(onClickFunc).toBeCalled()
  })
})
