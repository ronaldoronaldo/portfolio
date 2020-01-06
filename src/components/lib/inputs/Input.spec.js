import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'
import {
  ContainerTextInputStyle,
  TextInputStyle,
  LabelStyle
} from './Input.style'

describe('Should render', () => {
  it('ContainerTextInputStyle', () => {
    const wrapper = shallow(
      <Input onChange={() => console.log('changed')} value="test" />
    )
    const component = wrapper.find(ContainerTextInputStyle)
    expect(component.length).toBe(1)
  })
  it('TextInputStyle', () => {
    const wrapper = shallow(
      <Input onChange={() => console.log('changed')} value="test" />
    )
    const component = wrapper.find(TextInputStyle)
    expect(component.length).toBe(1)
  })
  it('LabelStyle', () => {
    const wrapper = shallow(
      <Input onChange={() => console.log('changed')} value="test" />
    )
    const component = wrapper.find(LabelStyle)
    expect(component.length).toBe(1)
  })
})

describe('Should call function after event trigger', () => {
  it('on Change', () => {
    const onChangeMock = jest.fn()
    const wrapper = shallow(<Input onChange={onChangeMock} value="test" />)
    const component = wrapper.find(TextInputStyle)
    component.simulate('change')
    expect(onChangeMock).toBeCalled()
  })
})
