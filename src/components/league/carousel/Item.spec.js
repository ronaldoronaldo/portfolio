import 'jest-styled-components'
import React from 'react'
import { mount } from 'enzyme'
import Item from './Item'
import { StyledItem } from './Item.styles'

describe('Item', () => {
  let props

  beforeEach(() => {
    props = {
      gutter: 10,
      shouldDisplay: true
    }
  })

  it('should render the given children', () => {
    const child = 'Some Child'
    const item = mount(<Item {...props}>{child}</Item>).find(StyledItem)
    expect(item.text()).toBe(child)
    expect(item).toHaveStyleRule('display', 'flex')
  })

  it('should have half of the given gutter as the horizontal padding', () => {
    const child = 'Some Child'
    const item = mount(<Item {...props}>{child}</Item>).find(StyledItem)
    expect(item).toHaveStyleRule('padding', `0 ${props.gutter / 2}px`)
  })

  it('should not display if shouldDisplay is false', () => {
    const child = 'Some Child'
    const item = mount(
      <Item {...props} shouldDisplay={false}>
        {child}
      </Item>
    ).find(StyledItem)
    expect(item).toHaveStyleRule('display', 'none')
  })
})
