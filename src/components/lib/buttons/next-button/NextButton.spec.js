import React from 'react'
import NextButton from './NextButton'
import { shallow } from 'enzyme'
import { NextButtonStyle, TextStyle } from './NextButton.style'
import { FontIcon } from 'components/lib/icons'

describe('Should render', () => {
  it('NextButtonStyle', () => {
    const wrapper = shallow(
      <NextButton text="test" onClick={() => console.log('clicked')} />
    )
    const component = wrapper.find(NextButtonStyle)
    expect(component.length).toBe(1)
  })
  it('TextStyle', () => {
    const wrapper = shallow(
      <NextButton text="test" onClick={() => console.log('clicked')} />
    )
    const component = wrapper.find(TextStyle)
    expect(component.length).toBe(1)
  })
  it('FontIcon', () => {
    const wrapper = shallow(
      <NextButton text="test" onClick={() => console.log('clicked')} />
    )
    const component = wrapper.find(FontIcon)
    expect(component.length).toBe(1)
  })
})

describe('Should being called', () => {
  it('onClickFunction', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<NextButton text="test" onClick={onClickMock} />)
    const component = wrapper.find(NextButtonStyle)
    component.simulate('Click')
    expect(onClickMock).toBeCalled()
  })
})
