import React from 'react'
import { shallow } from 'enzyme'
import FontIcon from './FontIcon'

describe('<FontIcon />', () => {
  it('should be render correctly', () => {
    const wrapper = shallow(<FontIcon iconName='test' />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should be have a icon', () => {
    const wrapper = shallow(<FontIcon iconName='test' />)
    expect(wrapper.length).toBe(1)
  })
})