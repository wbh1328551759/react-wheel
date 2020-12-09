import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="alipay"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  // it('onClick', () => {
  //   const fn = jest.fn()
  //   const fn2 = jest.fn()
  //   console.log(1)
  //   console.log(mount(<button>1</button>))
  //   const component = mount(<Icon name="wechat" onClick={fn}/>)
  //   component.find('svg').simulate('click')
  //   expect(fn2).toBeCalled()
  // })

})
