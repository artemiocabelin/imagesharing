import React from 'react'
import { shallow } from 'enzyme'
import Login from '../component_login'

describe('login', () => {
    let login;
    beforeEach(() => {
        login = shallow(<Login />)
    })

    it('renders properly', () => {
        expect(login).toMatchSnapshot()
    })
})