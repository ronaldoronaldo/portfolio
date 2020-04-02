import React from 'react'
import { mount } from 'enzyme'
import NextButton from './NextButton'
import { IconButton } from 'components/lib/buttons'

describe('NextButton', () => {
  it('should render a outlined IconButton with a NextIcon inside', () => {
    const button = mount(<NextButton />)
    expect(button.find(IconButton)).toHaveLength(1)
    expect(button.find('i')).toHaveLength(1)
  })

  it('should call teh given function on click', () => {
    const onClick = jest.fn()
    const button = mount(<NextButton onClick={onClick} />)
    button.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
