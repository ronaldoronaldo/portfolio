import React from 'react'
import { shallow } from 'enzyme'
import Alert from './Alert'

describe('<Alert>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Alert
        title="titulo"
        message="mensagem"
        onClick={() => console.log('Ok')}
        textButton="ok"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
