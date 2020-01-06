import React from 'react'
import { shallow } from 'enzyme'
import CardButton from './CardButton'

describe('<CardButton />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<CardButton onClick={() => console.log('ok')} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick event', () => {
    const onClickFunc = jest.fn()
    const wrapper = shallow(<CardButton onClick={onClickFunc} />)
    wrapper.props().onClick()
    expect(onClickFunc).toBeCalled()
  })
})
