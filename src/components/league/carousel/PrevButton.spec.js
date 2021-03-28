import React from 'react'
import { mount } from 'enzyme'
import PrevButton from './PrevButton'
import { IconButton } from 'components/lib/buttons'

describe('PrevButton', () => {
  it('should render a outlined IconButton with a PrevIcon inside', () => {
    const button = mount(<PrevButton />)
    expect(button.find(IconButton)).toHaveLength(1)
    expect(button.find('i')).toHaveLength(1)
  })

  it('should call teh given function on click', () => {
    const onClick = jest.fn()
    const button = mount(<PrevButton onClick={onClick} />)
    button.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
