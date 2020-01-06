import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('<Title />', () => {
  it('should be render correctly', () => {
    const wrapper = shallow(<Title text="teste" size={1} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with text', () => {
    const wrapper = shallow(<Title text="teste" size={1} />)
    expect(wrapper.text()).toBe('teste')
  })

  it('should render h1 title', () => {
    const wrapper = shallow(<Title text="teste" size={1} />)
    expect(wrapper.props().as).toBe('h1')
    expect(wrapper.html().includes('h1')).toBe(true)
  })

  it('should render h2 title', () => {
    const wrapper = shallow(<Title text="teste" size={2} />)
    expect(wrapper.props().as).toBe('h2')
    expect(wrapper.html().includes('h2')).toBe(true)
  })

  it('should render h3 title', () => {
    const wrapper = shallow(<Title text="teste" size={3} />)
    expect(wrapper.props().as).toBe('h3')
    expect(wrapper.html().includes('h3')).toBe(true)
  })

  it('should render h4 title', () => {
    const wrapper = shallow(<Title text="teste" size={4} />)
    expect(wrapper.props().as).toBe('h4')
    expect(wrapper.html().includes('h4')).toBe(true)
  })

  it('should render h5 title', () => {
    const wrapper = shallow(<Title text="teste" size={5} />)
    expect(wrapper.props().as).toBe('h5')
    expect(wrapper.html().includes('h5')).toBe(true)
  })
})
