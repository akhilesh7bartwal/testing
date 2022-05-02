import React from 'react'

import { shallow } from 'enzyme'
import Counter from './Counter'

it("Increments count by 1 when the increment button is clicked", () =>{

    // targeting component using shallow
    const wrapper = shallow(<Counter/>)

    // targeting element using classname
    const incrementButton = wrapper.find('button.increment')

    // simulating action clicked using simulate function
    incrementButton.simulate('click')
    
    // targeting element h1 and fetching test using test function
    const text = wrapper.find('h1').text()

    // assertion
    expect(text).toEqual('Value : 1')


    // const decrementButton = wrapper.find('button.decrement')
    // decrementButton.simulate('click')
    // const text1 = wrapper.find('h1').text()
    // expect(text1).toEqual('Value : -1')
})