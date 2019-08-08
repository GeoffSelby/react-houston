import React from 'react'
import { mount } from 'enzyme'
import Countdown from './'

describe('Countdown', () => {
  it('renders', () => {
    const component = mount(
      <Countdown endDate={new Date('December 25, 2019')} />
    )
    expect(component.prop('endDate')).toEqual(new Date('December 25, 2019'))
    component.unmount()
  })
})
