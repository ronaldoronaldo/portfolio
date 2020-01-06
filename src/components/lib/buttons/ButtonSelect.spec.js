import React from 'react'
import { shallow } from 'enzyme'
import ButtonSelect from './ButtonSelect'

describe('<ButtonSelect />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ButtonSelect
        onClick={() => console.log('ok')}
        iconName="arrow_drop_down"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick event', () => {
    const onClickFunc = jest.fn()
    const wrapper = shallow(
      <ButtonSelect onClick={onClickFunc} iconName="arrow_drop_down" />
    )
    wrapper.props().onClick()
    expect(onClickFunc).toBeCalled()
  })
})
