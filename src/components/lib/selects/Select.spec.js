import React from 'react'
import { shallow, mount } from 'enzyme'
import Select from './Select'
import ButtonSelect from 'components/lib/buttons/ButtonSelect'
import Dropdown from 'components/lib/dropdown/Dropdown'

describe('<ButtonSelect />', () => {
  let props
  beforeEach(() => {
    props = {
      items: [
        'Ensino infantil',
        '1º ano',
        '2º ano',
        '3º ano',
        '4º ano',
        'item 2',
        'item 1',
        'item 2',
        'item 1',
        'item 2',
        'item 1',
        'item 2'
      ],
      text: 'Selecione o estado',
      label: 'test',
      activeSelectButton: false
    }
  })

  it('should render correctly', () => {
    const wrapper = shallow(<Select {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should show options', () => {
    const wrapper = mount(<Select {...props} active={true} />)
    wrapper.find(ButtonSelect).simulate('click')
    expect(wrapper.contains({ ...props })).toBe(true)
  })

  it('should add and remove options from screen', () => {
    const wrapper = mount(<Select {...props} active={false} />)
    const button = wrapper.find(ButtonSelect)
    button.simulate('click')
    const dropdown = wrapper.find(Dropdown)
    setTimeout(() => expect(dropdown.prop('active')).toBe(true), 300)
    button.simulate('click')
    setTimeout(() => expect(dropdown.prop('active')).toBe(false), 300)
  })
})
