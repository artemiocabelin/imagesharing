import React from 'react'
import { shallow } from 'enzyme'
import Profile from '../component_profile'
import { MemoryRouter } from 'react-router'

describe('profile', () => {
    let profile;
    beforeEach(() => {
        profile = shallow(<Profile />)
    })

    it('renders properly', () => {
        expect(profile).toMatchSnapshot()
    })

})