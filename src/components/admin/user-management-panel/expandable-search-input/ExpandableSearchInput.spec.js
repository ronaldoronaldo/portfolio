import React from 'react'
import { mount, shallow } from 'enzyme'
import ExpandableSearchInput from './ExpandableSearchInput'
import { TextInputStyle } from './ExpandableSearchInput.style'

describe('<ExpandableSearchInput />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ExpandableSearchInput
        onChange={() => console.log('ok')}
        value={'test'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should focus', () => {
    const wrapper = mount(
      <ExpandableSearchInput
        onChange={() => console.log('ok')}
        value={'test'}
      />
    )

    const textInputComponent = wrapper.find(TextInputStyle)
    textInputComponent.prop('onFocus')
    setTimeout(
      () => expect(textInputComponent.prop('isFocused')).toBeTruthy(),
      300
    )
  })

  it('should call on change function', () => {
    const onChangeMock = jest.fn()
    const wrapper = mount(
      <ExpandableSearchInput onChange={onChangeMock} value={'test'} />
    )
    const textInputComponent = wrapper.find(TextInputStyle)
    textInputComponent.simulate('change')
    expect(onChangeMock).toBeCalled()
  })
})
