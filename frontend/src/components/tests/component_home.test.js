import React from 'react'
import { shallow } from 'enzyme'
import Home from '../component_home'

describe('home', () => {
    let home;
    beforeEach(() => {
        home = shallow(<Home />)
    })

    it('renders properly', () => {
        expect(home).toMatchSnapshot()
    })
})