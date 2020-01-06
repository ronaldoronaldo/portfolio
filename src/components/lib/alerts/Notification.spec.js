import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

describe('<Notification>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Notification
        title="titulo"
        message="mensagem"
        onClose={() => console.log('close')}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
