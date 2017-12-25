import React from 'react'
import { shallow } from 'enzyme'
import Register from '../component_register'

describe('register', () => {
    let register;
    beforeEach(() => {
        register = shallow(<Register />)
    })

    it('renders properly', () => {
        expect(register).toMatchSnapshot()
    })
})