import React from 'react'
import { shallow } from 'enzyme'
import BackButton from './BackButton'

describe('<BackButton />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<BackButton onClick={() => console.log('ok')} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick event', () => {
    const onClickFunc = jest.fn()
    const wrapper = shallow(<BackButton onClick={onClickFunc} />)
    wrapper.props().onClick()
    expect(onClickFunc).toBeCalled()
  })
})