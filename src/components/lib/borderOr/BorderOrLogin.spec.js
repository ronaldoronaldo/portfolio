import React from 'react'
import { shallow } from 'enzyme'
import BorderOr from './BorderOr'

describe('<BorderOr />', () => {
  it('should be render correctly', () => {
    const wrapper = shallow(<BorderOr />)
    expect(wrapper).toMatchSnapshot()
  })
})
