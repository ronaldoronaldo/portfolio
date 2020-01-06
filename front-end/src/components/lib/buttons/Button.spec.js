import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Button onClick={() => console.log('ok')} text='teste' />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick event', () => {
    const onClickFunc = jest.fn()
    const wrapper = shallow(<Button onClick={onClickFunc} text='teste' />)
    wrapper.props().onClick()
    expect(onClickFunc).toBeCalled()
  })
})