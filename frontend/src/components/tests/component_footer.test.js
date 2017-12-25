import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../component_footer'

describe('Footer', () => {
    let footer;
    beforeEach(() => {
        footer = shallow(<Footer />)
    })

    it('renders properly', () => {
        expect(footer).toMatchSnapshot()
    })
})