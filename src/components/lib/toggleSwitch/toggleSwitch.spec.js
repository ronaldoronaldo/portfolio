import React from 'react'
import { shallow } from 'enzyme'
import ToggleSwitch from './ToggleSwitch'

describe('<ToggleSwitch>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ToggleSwitch active="titulo" onChange={() => console.log('close')} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
